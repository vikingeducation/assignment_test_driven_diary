let Diary = require("../lib/diary");
let fs = require("fs");

let diary;

// describe("diary", () => {
//   it("should have a file to write to", function() {
//     diary = new Diary("test.json");
//     expect(diary.filename).toEqual("./data/test.json");
//   });
//   it("should return correct default file", function() {
//     diary = new Diary();
//     expect(diary.filename).toEqual("./data/diary.json");
//   });
// });

describe("Diary Module:", () => {
  beforeEach(() => {
    diary = new Diary();
  });

  describe("The entry method should", () => {
    beforeEach(() => {
      diary.entry("Brad is everything to me.");
    });

    it("add to the diary file", function() {
      expect(diary.entryArr[0].text).toEqual("Brad is everything to me.");
    });

    it("add dates to the diary entries", function() {
      expect(diary.entryArr[0].date).toBeTruthy();
    });

    it("accept custom time", function() {
      let date = new Date();
      diary.entry("That brad fellow is real swell.", date);
      expect(diary.entryArr[1].date).toEqual(date.toString());
    });
  });

  describe("The entries method should", () => {
    beforeEach(() => {
      diary.entry("Brad is everything to me.");
      diary.entry("<3 Braaaad <3");
    });
    it("return a list of all of the entries", () => {
      expect(Array.isArray(diary.entries())).toBeTruthy();
      expect(diary.entries().length).toEqual(2);
    });
  });

  describe("The tags methods should", () => {
    beforeEach(() => {
      diary.entry("I'm standing outside Brad's house #yolo");
      diary.entry("I'm at Brad's window #yolo");
      diary.entry("OMG. What have I done? #sorrynotsorry");
    });
    it("return a list of all of the tags", () => {
      expect(diary.tags().length).toEqual(2);
      expect(Array.isArray(diary.tags())).toBeTruthy();
      expect(typeof diary.tags()[0] === "string").toBeTruthy();
    });
    it("return a list of entries with a given tag", () => {
      expect(diary.entriesWithTag("yolo").length).toEqual(2);
    });
  });

  describe("The date methods should", () => {
    it("returns a list of the entries written today", () => {
      diary.entry(
        "I'm standing outside Brad's house #yolo",
        new Date(Date.parse(1990, 10))
      );
      diary.entry("I'm at Brad's window #yolo");
      diary.entry("OMG. What have I done? #sorrynotsorry");
      expect(diary.today().length).toEqual(2);
      expect(diary.today()[0].text).toEqual("I'm at Brad's window");
    });
    it("returns a list of the entries written on a given day", () => {
      diary.entry(
        "I'm standing outside Brad's house #yolo",
        new Date(Date.parse(1990, 10))
      );
      diary.entry("I'm at Brad's window #yolo", new Date(Date.parse(1990, 10)));
      diary.entry("OMG. What have I done? #sorrynotsorry");
      expect(diary.date(Date.parse(1990, 10)).length).toEqual(2);
      expect(diary.date(Date.parse(1990, 10))[0].text).toEqual(
        "I'm standing outside Brad's house"
      );
    });
  });

  describe("The search method should", () => {
    it("returns a list of notes with the given substring", () => {
      diary.entry("Today, Brad accidentally touched my hand in the hallway.");
      diary.entry("Brad is a dreamboat.");
      diary.entry("My dad is sooo annoying.");
      expect(diary.search("Brad").length).toEqual(2);
    });
  });
});
