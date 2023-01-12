import { verifyCards } from "../content/verifyFunctions.js"
let contador = 0;
let cardsList = []

function renderCards(numberOfPlays) {
    cardsList = generateCards(numberOfPlays)
}
function generateCards(numberOfPlays){
    return Array(numberOfPlays/2).fill().map((_, indice) => `<li class="cards card-${indice+1}">
    <img src="assets/img/back.png" alt="" width="117px" >
    <img src="assets/img/parrot${indice+1}.gif" alt="" width="117px">
</li>`)
}

function onClickCard(event) {
    let target = event.currentTarget
    let flipperCards = target.parentElement.querySelectorAll(".verifyFlip")

    if (flipperCards.length <= 1 && target.classList.contains("flipper") == false) {
        target.classList.add("flipper")
        target.classList.add("verifyFlip")
        contador++
        setTimeout(() => verifyCards(target, flipperCards, contador), 1500)
    }
}

function insertEventOnClick() {
    const cards = document.querySelectorAll(".cards")
    cards.forEach(card => card.addEventListener("click", onClickCard))
}

export { insertEventOnClick, renderCards, cardsList }