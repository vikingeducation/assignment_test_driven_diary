const Diary = require("../diary.js");

describe("diaryEntries", () => {
  it("returns an entry", () => {
    const results = "stuff";
    const date = Date.parse("Mon, 25 Dec 1995 13:30:00 GMT");
    let diary = new Diary();
    diary.entry(results, date);
    expect(diary.entryArr[0].date.toString()).toMatch(date.toString());
  });
});

describe("diaryTags", () => {});

describe("diaryEntriesWithTags", () => {});

describe("diaryToday", () => {});

describe("diaryDate", () => {});

describe("diarySearch", () => {});

describe("diaryCLI", () => {});
