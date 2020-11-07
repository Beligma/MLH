const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-010 Name ', function () {
            browser.url('');
            let name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-011 Gender He', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-012 Gender She', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-013 Gender It', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

       it('TC-014 Age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-015 Story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-016 Create', function () {
            const create = $(sel.createButton).isDisplayed();
            expect(create).toEqual(true);
        });

    });
    describe ('Placeholders are correct', function () {

        it('TC-017 Name is correct', function () {
            const name = $(sel.name).getAttribute('placeholder');
            expect(name).toEqual(exp.placeholderName);
        });

        it('TC-018 Gender he is correct', function () {
            const he = $$(sel.placeholderAge)[0].getAttribute('value');
            expect(he).toEqual(exp.placeholderHe);
        });

        it('TC-019 Gender she is correct', function () {
            const she = $$(sel.placeholderAge)[1].getAttribute('value');
            expect(she).toEqual(exp.placeholderShe);
        });

        it('TC-020 Gender it is correct', function () {
            const placeholderIt = $$(sel.placeholderAge)[2].getAttribute('value');
            expect(placeholderIt).toEqual(exp.placeholderIt);
        });

        it('TC-021 Age is correct', function () {
            const placeholderAge = $(sel.age).getAttribute('placeholder');
            expect(placeholderAge).toEqual(exp.placeholderAge);
        });

    });

});