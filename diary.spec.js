let Diary = require('./diary');

let diary = new Diary();

describe("entry()", () => {
it('adds entry to diary', () => {
expect(diary.entry("Brad is everything to me.")).toEqual('Brad is everything to me.');
});

it('contains time/date of its creation', () => {
expect(diary.entry("<3 Braaaad <3")).toEqual('<3 Braaaad <3' + diary[this.currentTime]);
});


it('may take an optional date argument which will be set as its time of creation', () =>{
expect(diary.entry("dkeidk", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"))).toEqual(['dkeidk', 819898200000]);


})

});




console.log(typeof(diary))