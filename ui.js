"use strict";

function appItemView(imgUrl, title, description) {
    return `
    <div class="item-app">
        ${smallRoundedSquareImage(imgUrl)}
        <div class="item-app-content" style="margin-left: 12px">
            <div class="text-title-medium">${title}</div>
            <div class="text-body-medium">${description}</div>
        </div>
    </div>
    `;
}

function smallRoundedSquareImage(url) {
    return `
    <div class="image image-small image-rounded" style="background-image: url('${url}')"></div>
    `
}