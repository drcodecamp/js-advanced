let bitcoinPrice = 0
let prevBtcPrice = bitcoinPrice
let btcEl = document.querySelector('span')
let symbolEl = document.querySelector('em')

function fetchSymbolPrice(symbol, symbolName) {
    prevBtcPrice = bitcoinPrice
    fetch(`https://api.binance.com/api/v3/avgPrice?symbol=${symbol}`)
        .then((result) => result.json())
        .then((data) => {
            symbolEl.innerText = symbolName
            const { price } = data
            bitcoinPrice = price
            btcEl.innerHTML = bitcoinPrice
            btcEl.style.color =
                bitcoinPrice === prevBtcPrice
                    ? 'white'
                    : bitcoinPrice > prevBtcPrice
                    ? '#63fba4'
                    : '#fb6393'
        })
}

;(() => {
    document.querySelector('button').addEventListener('click', () => {
        const selectElement = document.querySelector('select')
        const symbol = selectElement.options[selectElement.selectedIndex].value
        const symbolName =
            selectElement.options[selectElement.selectedIndex].innerText
        fetchSymbolPrice(symbol, symbolName)
    })
})()
