"use strict";

function displayMainPage() {
    replaceTopPage("main-page", mainPage());
}

function mainPage() {
    return `
    <h2>Loading page</h2>
    <p>Wait until the data has been loaded.</p>
    ${appItemView("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png", "Title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}
    ${appItemView("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png", "Title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}
    ${appItemView("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png", "Title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}
    ${appItemView("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png", "Title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}
    `;
}