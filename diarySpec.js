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

  it("makes a new tag", () => {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window #yolo");
    expect(diary.tags()).toEqual(['yolo']);
  })

  it("outputs all entries with specific tag", () => {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window #yolo");

    expect(diary.entriesWithTag("yolo")).toEqual(
     ["I'm standing outside Brad's house #yolo", 
       "I'm at Brad's window #yolo"]
    )
 
  })

  it("Outputs all entries written today", () => {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window");

    expect(diary.today()).toEqual(
     ["I'm standing outside Brad's house #yolo", 
       "I'm at Brad's window"]
    )
  })


})
