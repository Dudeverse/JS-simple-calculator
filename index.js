let resEl = document.getElementById("res-el")
function add(form) {
    let sum = (+form.fnum.value) + (+form.lnum.value)
    resEl.textContent = sum
}