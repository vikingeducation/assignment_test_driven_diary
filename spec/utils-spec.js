const utils = require("../tools/utils");

describe('utils', () => {

    describe('removeTags functions', () => {
        it('remove a tag from a message', () => {
            let msg = "hello random people reading this #randos";
            expect(utils.removeTags(msg)).toEqual("hello random people reading this");
        });
    });

    describe('checkForTags function', () => {
        it('store any tags included in a message', () => {
            let msg = "hello random people reading this #randos #hello";
            expect(utils.checkForTags(msg)).toEqual(["randos", "hello"]);
        });
    });
});