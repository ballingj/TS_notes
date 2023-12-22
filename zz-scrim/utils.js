"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPropertyRecommended = exports.populateUser = exports.showReviewTotal = void 0;
var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var propertyRecommendDisplay = document.querySelector('.properties');
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;
//iterate over properties and display each property
function showPropertyRecommended(properties) {
    properties.map(function (property) {
        propertyRecommendDisplay.innerHTML += "<card class=\"card\">".concat(property.title, "<img src=").concat(property.image, "></card>");
    });
}
exports.showPropertyRecommended = showPropertyRecommended;
