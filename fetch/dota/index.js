let lastMatchesIds = []
let matchList = []

const app = document.querySelector('#app')

function renderMatches() {
    let matchesStr = ``
    matchList.forEach((match) => {
        const formatDate = new Date(
            match.start_time * 1000
        ).toLocaleDateString()
        const radiantLogoUrl = match.radiant_team?.logo_url || ''
        const direLogoUrl = match.dire_team?.logo_url || ''
        matchesStr += `<figure id="team-a">
                 <div class="team">
                 <picture>
                      <source srcset="${radiantLogoUrl}" />
                      <img src="https://egamersworld.com/images/asset/games/dota2.svg" alt="" />
                    </picture>
                      <h3>${match.radiant_name}</h3>
                    </div>
                <div class="match-details">
                    <h3>${formatDate}</h3>
                    <h4><span class="a-score ${
                        match.radiant_win && 'winner'
                    }">${match.radiant_score}</span>:<span
                            class="b-score ${
                                !match.radiant_win && 'winner'
                            }"">${match.dire_score}</span></h4>
                    <p>${match.league.name}</p>
                </div>
                <div class="team">
                 <picture>
                      <source srcset="${direLogoUrl}" />
                      <img src="https://egamersworld.com/images/asset/games/dota2.svg" alt="" />
                    </picture>
                    <h3>${match.dire_name}</h3>
                </div>
            </figure>`
    })
    app.innerHTML = matchesStr
}

function fetchLastMatches() {
    fetch('https://api.opendota.com/api/proMatches').then((res) => {
        res.json().then((data) => {
            lastMatchesIds = data.slice(0, 5)
            console.log('last', lastMatchesIds)
            lastMatchesIds.forEach((match) => {
                const { match_id } = match
                fetchMatchById(match_id)
            })
        })
    })
}

function fetchMatchById(match_id) {
    console.log('fetching', `https://api.opendota.com/api/matches/${match_id}`)
    fetch(`https://api.opendota.com/api/matches/${match_id}`).then((res) => {
        res.json().then((match) => {
            matchList.push(match)
            renderMatches(matchList)
        })
    })
}

fetchLastMatches()
renderMatches(matchList)
