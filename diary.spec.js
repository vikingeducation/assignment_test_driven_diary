let Diary = require('./diary');

let diary = new Diary();

describe("entry()", () => {
it('adds entry to diary', () => {
expect(diary.entry("Brad is everything to me.")).toEqual('Brad is everything to me.');
});



})

console.log(typeof(diary))