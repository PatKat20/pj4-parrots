import {numberOfPlays} from "../content/renders.js";
import { cronometro, segundos} from "../utils/utils.js";

function verifyCards(cardClicado, cardsFlipped, contador){
    cardsFlipped = cardClicado.parentElement.querySelectorAll(".verifyFlip");
    
    let card1Class;
    if(cardsFlipped[0]){
        card1Class = cardsFlipped[0].classList[1];
    }
    let card2Class;
    if(cardsFlipped[1]){
        card2Class = cardsFlipped[1].classList[1];
    }

    verifyFlipCard(cardsFlipped, card1Class, card2Class, contador)
};

function verifyFlipCard(cardsFlip, firstCard, secondCard, contador){
    if(cardsFlip.length === 2){
        if(firstCard !== secondCard){
            removeClasses(cardsFlip);
        }else{
            cardsFlip[0].classList.remove("verifyFlip");
            cardsFlip[1].classList.remove("verifyFlip");
            gameOver(contador);
        }
    };
};

function gameOver(countOfClick){
    let flipperCards = document.querySelectorAll(".flipper");
    
    if(flipperCards.length === Number(numberOfPlays)){
        alert(`"Você ganhou em ${countOfClick} jogadas! A duração do jogo foi de ${segundos} segundos!"`);
        const ask = prompt("Gostaria de reinicar o jogo?");
        doRestart(ask);
    };
};

function doRestart(resposta){
    if(resposta === "sim"){
        location.reload();
    }else if(resposta === "não"){
        clearInterval(cronometro);
    }else{
        return doRestart(resposta = prompt("Gostaria de reinicar o jogo?"));
    };
};

function removeClasses(cards){
    cards.forEach(card =>{
        card.classList.remove("flipper");
        card.classList.remove("verifyFlip");
    })
};

export { verifyCards };