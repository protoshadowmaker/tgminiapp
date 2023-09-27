"use strict";

var viewStackIds = []

window.onload = function() {
    displayMainPage();
};

function pushPage(pageId, content) {
    appendToElement("frame-root", pageView(pageId, content));
    viewStackIds.push(pageId);
}

function popPage() {
    if(viewStackIds.length == 0) {
        return;
    }
    const topPageId = viewStackIds.pop();
    const pageToRemove = document.getElementById('your-element-id');
    if (pageToRemove) {
        pageToRemove.remove();
    } 
}

function replaceTopPage(pageId, content) {
    popPage();
    pushPage(pageId, content);
}