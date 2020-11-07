const sel = require('../../data/selectors.json');
const testData = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4')

describe('Checking the main functionality', function () {
    describe('Happy path', function () {
        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            inputValues4(testData.name, testData.gender.she, testData.age, testData.storyType);
            const create = $(sel.createButton).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });
    });
    describe('Other path', function () {
        it('TC-022 Gender he is working', function () {
            browser.url('');
            inputValues4(testData.name, testData.gender.he, testData.age, testData.storyType);
            $(sel.createButton).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
    });
});