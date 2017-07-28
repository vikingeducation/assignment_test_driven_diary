let Diary = require("../lib/diary");
let fs = require("fs");

let diary;

describe("diary", () => {
  it("should have a file to write to", function() {
    diary = new Diary("test.json");
    expect(diary.filename).toEqual("../../data/test.json");
  });
  it("should return correct default file", function() {
    diary = new Diary();
    expect(diary.filename).toEqual("../../data/diary.json");
  });
});

describe("entry", () => {
  beforeEach(() => {
    diary = new Diary("test.json");
    fs.writeFileSync("../data/test.json", "");
  });

  it("should add to the diary file", function() {
    expect(diary.entry(""));
  });
});
