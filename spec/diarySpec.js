let Diary = require("../lib/diary");
let fs = require("fs");

let diary;
let diaryObj;

describe("diary", () => {
  it("should have a file to write to", function() {
    diary = new Diary("test.json");
    expect(diary.filename).toEqual("./data/test.json");
  });
  it("should return correct default file", function() {
    diary = new Diary();
    expect(diary.filename).toEqual("./data/diary.json");
  });
});

describe("entry", () => {
  beforeEach(() => {
    diary = new Diary("test.json");
    fs.writeFileSync("./data/test.json", "{}");
    diary.entry("Brad is everything to me.");
    let diaryFile = fs.readFileSync("./data/test.json", "utf8");
    diaryObj = JSON.parse(diaryFile);
  });

  it("should add to the diary file", function() {
    expect(diaryObj.entries[0].text).toEqual("Brad is everything to me.");
  });

  it("add dates to the diary entries", function() {
    expect(diaryObj.entries[0].date).toBeTruthy();
  });
});

describe("entries with extra params", () => {
  beforeEach(() => {
    diary = new Diary("test.json");
    fs.writeFileSync("./data/test.json", "{}");
  });
  it("accept custom time", function() {
    let date = new Date();
    diary.entry("Brad is everything to me.", date);
    let diaryFile = fs.readFileSync("./data/test.json", "utf8");
    let diaryObj = JSON.parse(diaryFile);
    expect(diaryObj.entries[0].date).toEqual(date.toString());
  });
});

describe("The entries method should", () => {
  beforeEach(() => {
    diary = new Diary("test.json");
    fs.writeFileSync("./data/test.json", "{}");
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
    diary = new Diary("test.json");
    fs.writeFileSync("./data/test.json", "{}");
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
  beforeEach(() => {
    diary = new Diary("test.json");
    fs.writeFileSync("./data/test.json", "{}");
  });
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
