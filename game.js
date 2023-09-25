let cardsCount = 0;

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

function appendToElement(elementId, data) {
    document.getElementById(elementId).innerHTML += data;
}

function replaceInElement(elementId, data) {
    document.getElementById(elementId).innerHTML = data;
}

function cardView(number) {
    return `
    <div class="card">
        <h2>Card ${number}</h2>
        <p>This is the content of Card ${number}.</p>
    </div>
    `;
}

function addNextCard() {
    appendToElement("content", cardView(++cardsCount));
}