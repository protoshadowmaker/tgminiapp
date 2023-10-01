"use strict";

function pageView(id, content) {
    return `
    <div id="${id}" class="${cssPageContainer}">
        ${content}
    </div>
    `;
}

function appItemView(id, imgUrl, title, category, tags, rating, bookmarked, onClickCallbackName) {
    let bookmarkTag = "";
    if(bookmarked) {
        bookmarkTag = " • Bookmarked";
    }
    return `
    <div id="app-${id}" class="${cssItemApp}" onclick="${onClickCallbackName}(${id})">
        ${smallRoundedSquareImageView(imgUrl)}
        <div class="${cssItemAppContent}" style="margin-left: 12px">
            <div class="${cssTextTitleMedium}">${title}</div>
            <div class="${cssTextBodyMedium}" style="margin-top: 4px; margin-bottom: 2px">${buildCategoriesLine(category, tags)}</div>
            <div class="${cssTextBodyMedium}">${rating} ★${bookmarkTag}</div>
        </div>
    </div>
    `;
}

function appDetailsItemView(id, imgUrl, title, category, tags) {
    return `
    <div id="app-details-${id}" class="${cssItemApp}">
        ${mediumRoundedSquareImageView(imgUrl)}
        <div class="${cssItemAppContent}" style="margin-left: 12px">
            <div class="${cssTextTitleLarge}">${title}</div>
            <div class="${cssTextBodyLarge}" style="margin-top: 8px; margin-bottom: 2px">${buildCategoriesLine(category, tags)}</div>
        </div>
    </div>
    `;
}

function buildCategoriesLine(category, tags) {
    let categoriesLine = category;
    for (let i = 0; i < tags.length; i++) {
        categoriesLine += " • " + tags[i];
    }
    return categoriesLine;
}

function appDetailsImageView(imgUrl) {
    return `
    <img class="image-app-details" src="${imgUrl}"></img>
    `;
}

function smallRoundedSquareImageView(url) {
    return `
    <div class="${cssImage} ${cssImageSmall} ${cssImageRounded}" style="background-image: url('${url}')"></div>
    `;
}


function mediumRoundedSquareImageView(url) {
    return `
    <div class="${cssImage} ${cssImageMedium} ${cssImageRounded}" style="background-image: url('${url}')"></div>
    `;
}

function screenshotPreviewImageView(url) {
    return `
    <div class=${cssImageAppScreenshotItemContainer}>
        <img class="${cssImageAppScreenshotItemImage}" src="${url}"></div>
    </div>
    `;
}

function categoryChipView(id, displayValue, onClickCallbackName) {
    return `
    <button id="category-${id}" class="${cssButtonAction} ${cssButtonActionSecondary} ${cssButtonRipplePrimary}" onClick="${onClickCallbackName}('${id}')"">${displayValue.displayText}</button>
    `;
}

function ratingBar() {
    return "☆ ★"
}

function categoryBarView(id, categories, onClickCallbackName) {
    let categoriesLine = "";
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        categoriesLine += `\n
        ${categoryChipView(category.value, category, onClickCallbackName)}
        `;
    }
    return `
    <div id="${id}" class="${cssContainerScrollH}">
        ${categoriesLine}
    </div>
    `;
}