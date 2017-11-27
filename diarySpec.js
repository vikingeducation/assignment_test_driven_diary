const Diary = require('./diary.js');

describe("entries", () => {

  let diary;
  beforeEach(() => {
    diary = new Diary();
  })

  it("makes a new entry", () => {
    expect(diary.entries().length).toEqual(0);
    diary.entry("Braaad");
    expect(diary.entries().length).toEqual(1);
  })

  



})
