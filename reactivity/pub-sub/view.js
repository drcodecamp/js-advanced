import { increment, decrement, eventBus } from './model.js'

const counterElement = document.querySelector('#counter')

eventBus.subscribe('counter-updated', (counter) => {
    counterElement.innerText = counter
})
;(() => {
    document.querySelector('.increment').addEventListener('click', increment)
    document.querySelector('.decrement').addEventListener('click', decrement)
})()
