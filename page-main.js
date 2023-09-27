"use strict";

function displayMainPage() {
    replaceTopPage("main-page", mainPage());
    displayApps();
}

function mainPage() {
    return `
    <h2>Loading page</h2>
    <p>Wait until the data has been loaded.</p>
    <div id="apps-container">
    ${appItemView("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png", "Title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}
    ${appItemView("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png", "Title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}
    ${appItemView("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png", "Title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}
    ${appItemView("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png", "Title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}
    </div>
    `;
}

function displayApps() {
    //clear items
    let displayContent = "";
    for (let i = 0; i < 100; i++) {
        displayContent += `\n${appItemView("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png", "Title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}`
    }
    replaceInElement("apps-container", displayContent);
}

function loadApps(category) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}