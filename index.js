let resEl = document.getElementById("res-el")
function add(form) {
    let sum = (+form.fnum.value) + (+form.lnum.value)
    resEl.textContent = sum
}
function subtract(form) {
    let sum = (+form.fnum.value) - (+form.lnum.value)
    resEl.textContent = sum
}
function divide(form) {
    let sum = (+form.fnum.value) / (+form.lnum.value)
    resEl.textContent = sum
}
function multiply(form) {
    let sum = (+form.fnum.value) * (+form.lnum.value)
    resEl.textContent = sum
}