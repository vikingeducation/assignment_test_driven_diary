let Diary = require('./diary');

let diary;
beforeEach(function() {
   diary = new Diary();
 });
describe("entry()", () => {
    
it('adds entry to diary', () => {
expect(diary.entry("Brad is everything to me.")).toEqual(diary.mesg);
});

it('contains time/date of its creation', () => {
let current = new Date().toISOString().slice(0, 19);
expect(diary.entry("<3 Braaaad <3")).toEqual(diary.en, current);
});


it('may take an optional date argument which will be set as its time of creation', () =>{
expect(diary.entry("dkeidk", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"))).toEqual(diary.mesg, diary.userD);


})

});
describe("entries()", () => {
    
it('returns all entries', () => {
diary.entry("bla")
diary.entry("la")
expect(diary.entries().toEqual(diary.mesg);
});



console.log(typeof(diary))