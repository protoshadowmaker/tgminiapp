"use strict";

let cardWidth = 250;
let cardHeight = 350;

function cardView(number) {
    return `
    <div class="card">
        <h2>Card ${number}</h2>
        <p>This is the content of Card ${number}.</p>
    </div>
    `;
}