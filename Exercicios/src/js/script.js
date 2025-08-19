let value = document.getElementById("value-count")
let btnPlus = document.getElementById("btn-plus")
let btnMinus = document.getElementById("btn-minus")
let btnReset = document.getElementById("btn-reset")

btnPlus.addEventListener('click', () => {
    value.innerHTML = parseInt(value.innerHTML) + 1;
})

btnReset.addEventListener('click', () => {
    value.innerHTML = 0;
})