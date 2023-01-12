import { comparador } from "../utils/utils.js";
import { insertEventOnClick, renderCards, cardsList } from "../events/oncardEvents.js";
let numberOfPlays = 0;

function start(){
    do{
        numberOfPlays = prompt("Quantas cartas deseja jogar? (Somente números pares de 4 a 14)");
    } while(numberOfPlays < 4 || numberOfPlays > 14 || numberOfPlays % 2 !== 0);

    renderCards(numberOfPlays);
    shuffleCardsAndInsertIntoHtml();
    insertEventOnClick();
};

function shuffleCardsAndInsertIntoHtml(){
    const lista = document.getElementById("cardsList");
    cardsList.push(...cardsList);
    const cardsListShufled = shuffleArray(cardsList);

    cardsListShufled.forEach(card =>{
        lista.innerHTML += card;
    })
};

export { start , numberOfPlays };