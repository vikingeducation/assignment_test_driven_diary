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
    diary.entry("Brad is everything to me.");
    let diaryFile = fs.readFileSync("./data/test.json", "utf8");
    diaryObj = JSON.parse(diaryFile);
  });
  it("accept custom time", function() {
    let date = new Date();
    diary.entry("Brad is everything to me.", date);
    let diaryFile = fs.readFileSync("./data/test.json", "utf8");
    let diaryObj = JSON.parse(diaryFile);
    expect(diaryObj.entries[0].date).toEqual(date.toString());
  });
});
