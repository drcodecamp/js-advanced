import { createState } from './state.js'

const counterEl = document.querySelector('#counter')
let counter = createState({ value: 100, element: counterEl })

const handleIncrement = () => {
    counter.value++
}
const handleDecrement = () => {
    counter.value--
}
document.querySelector('.increment').addEventListener('click', handleIncrement)
document.querySelector('.decrement').addEventListener('click', handleDecrement)
