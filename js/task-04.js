let counterValue = 0
const displayContent = document.querySelector('#value')
const btnInc = document.querySelector('button[data-action="increment"]')
const btnDec = document.querySelector('button[data-action="decrement"]')

btnInc.addEventListener('click', () => {
    counterValue++
    displayContent.textContent = counterValue
}
)
btnDec.addEventListener('click', () => {
    counterValue--
    displayContent.textContent = counterValue
})