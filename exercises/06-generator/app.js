const searchInput = document.getElementById('searchInput')
const showNextBtn = document.getElementById('showNextBtn')
const output = document.getElementById('output')

let sentence = output.innerText
const highlightGenerator = highlightWordGenerator(sentence)

showNextBtn.addEventListener('click', () => {
    const result = highlightGenerator.next()
    if (!result.done) {
        output.innerHTML = result.value.toString()
    } else {
        output.innerHTML = sentence
        console.log('No more occurrences found')
    }
})

function* highlightWordGenerator(sentence) {
    const targetWord = searchInput.value
    if (!targetWord) return
    let currentIndex = 0
    while (true) {
        const nextIndex = sentence.indexOf(targetWord, currentIndex)
        if (nextIndex !== -1) {
            const startIndex = nextIndex
            const endIndex = startIndex + targetWord.length
            const highlighted = `${sentence.slice(
                0,
                startIndex
            )}<span style="background-color: yellow; font-weight: bold;">${sentence.slice(
                startIndex,
                endIndex
            )}</span>${sentence.slice(endIndex)}`
            yield highlighted
            currentIndex = endIndex
        } else {
            break
        }
    }
}
