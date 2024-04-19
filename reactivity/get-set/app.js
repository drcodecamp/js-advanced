import { createState } from './state.js'

const counterEl = document.querySelector('#counter')

let counter = createState({ value: 0, element: counterEl })

document.querySelector('.increment').addEventListener('click', () => {
    counter.state++
})

document.querySelector('.decrement').addEventListener('click', () => {
    counter.state--
})

setTimeout(() => {
    counter.state = counter.state * 2
}, 3000)
