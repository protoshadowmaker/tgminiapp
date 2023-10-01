"use strict";

const idAppDetailsBookmark = "app-details-bookmark";
let selectedAppDetails;

function displayAppPage(app) {
    pushPage("app-page", appDetailsPage(app));
    loadAppDetails(app);
}

function appDetailsPage(app) {
    return `
    ${appDetailsItemView(app.id, app.iconUrl, app.title, app.category, app.tags)}
    ${appDetailsActionsView()}
    ${appScreenshotsView()}
    `;
}

function appDetailsActionsView() {
    return `
    <div class="${cssContainerFlexSpaceBetween}">
        <div class="${cssContainerItemFlexEqual}" style="padding: 20px 10px">
            <button id="${idAppDetailsBookmark}" class="${cssButtonAction} ${cssButtonActionPrimary} ${cssButtonRipplePrimary}" style="width: 100%;" onClick="onBookmarkClicked()">Bookmark</button>
        </div>
        <div class="${cssContainerItemFlexEqual}" style="padding: 20px 10px">
            <button class="${cssButtonAction} ${cssButtonActionPrimary} ${cssButtonRipplePrimary}" style="width: 100%" onClick="onOpenAppClicked()">Launch</button>
        </div>
    </div>
    `;
}

function appScreenshotsView() {
    return `
    <div id="app-details-screenshots" class="${cssImageAppScreenshotListContainer} ${cssContainerScrollH}">
    </div>
    `;
}

function updateBookmarkState() {
    if(!selectedAppDetails) {
        return;
    }
    removeClassesFromElement(idAppDetailsBookmark, [cssButtonActionPrimary,  cssButtonActionSecondary]);
    if(selectedAppDetails.fav) {
        addClassToElement(idAppDetailsBookmark, cssButtonActionSecondary);
        replaceInElement(idAppDetailsBookmark, "Bookmarked")
    } else {
        addClassToElement(idAppDetailsBookmark, cssButtonActionPrimary);
        replaceInElement(idAppDetailsBookmark, "Bookmark")
    }
    window.Telegram.WebApp.HapticFeedback.selectionChanged();
}

function onOpenAppClicked() {
    if (selectedAppDetails) {
        window.Telegram.WebApp.openTelegramLink(selectedAppDetails.botAppUrl);
    }
}

function onBookmarkClicked() {
    if(selectedAppDetails) {
        bookmarkApp(selectedAppDetails);
    }
}

function displayAppDetails(appDetails) {
    selectedAppDetails = appDetails;
    replaceInElement("image-app-details-container", appDetailsImageView(appDetails.imageUrl));
    updateBookmarkState();
    displayScreenshots(appDetails);
}

function displayScreenshots(appDetails) {
    let screenshots = "";
    for (const screenshotUrl of appDetails.screenshots) {
        screenshots += `\n${screenshotPreviewImageView(screenshotUrl)}`;
    }
    replaceInElement("app-details-screenshots", screenshots);
}

function updateAppDetails(appDetails) {
    selectedAppDetails = appDetails;
    updateBookmarkState();
}

// Network

function loadAppDetails(app) {
    if (stubData) {
        loadAppsDetailsFromStub(app);
    }
}

function bookmarkApp(appDetails) {
    if(stubData) {
        stubBookmarkApp(appDetails);
    }
}

function loadAppsDetailsFromStub(app) {
    const appResponse = JSON.parse(mockAppDetailsResponse);
    displayAppDetails(appResponse[app.id]);
}

function stubBookmarkApp(appDetails) {
    appDetails.fav = !appDetails.fav;
    updateAppDetails(appDetails);
}