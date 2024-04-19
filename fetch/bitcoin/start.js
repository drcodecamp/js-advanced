// https://api.binance.com/api/v3/avgPrice?symbol=
let btcPrice = 0
let priceEl = document.querySelector('span')

function fetchSymbolPrice(symbol) {
    fetch(`https://api.binance.com/api/v3/avgPrice?symbol=${symbol}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const { price } = data
            btcPrice = parseFloat(price).toFixed(2)
            priceEl.innerText = btcPrice
        })
}

;(() => {
    document.querySelector('button').addEventListener('click', () => {
        fetchSymbolPrice('BTCUSDT')
    })
})()
