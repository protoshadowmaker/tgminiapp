"use strict";

window.onload = function() {
    
};

function renderWaitGameState() {

}

function renderWaitTurnState() {

}

function renderTurnState() {

}

function renderCards() {

}


function addNextCard() {
    let cards = document.getElementsByClassName('card');
    appendToElement("content", cardView(cards.length + 1));
    updateCardsMargin();
}

function updateCardsMargin() {
    let availableWidthForCards = document.getElementById('content').offsetWidth;
    let cards = document.getElementsByClassName('card');
    let allCardsSize = cards.length * 250;
    let cardsMargin = 0;
    if(cards.length > 1) {
        let margin = (availableWidthForCards - allCardsSize) / cards.length;
        cardsMargin = Math.min(50, margin);
    }
    for (let i = 1; i < cards.length; i++) {
        cards[i].style.marginLeft = `${cardsMargin}px`;
    }
}