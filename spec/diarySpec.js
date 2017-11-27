const Diary = require("../diary.js");
describe("diaryMega", () => {
  let diary;
  beforeEach(() => {
    diary = new Diary();
  });
  describe("diaryEntries", () => {
    it("returns an entry", () => {
      const results = "stuff";
      const date = Date.parse("Mon, 25 Dec 1995 13:30:00 GMT");
      diary.entry(results, date);
      expect(
        [diary.entryArr[0].body, diary.entryArr[0].date.toString()].toString()
      ).toMatch([results, date.toString()].toString());
    });
  });

  describe("diaryTags", () => {
    it("set array of tag names", () => {
      let tags = [];
      let results = ["firstTag", "secondTag"];
      diary.entry("#firstTag");
      diary.entry("#secondTag");
      tags = diary.tags();
      expect(results.toString()).toMatch(tags.toString());
    });
  });

  describe("diaryEntriesWithTags", () => {
    it("return an array of tagged entries", () => {
      diary.entry("this will not match");
      diary.entry("this should #yolo");
      diary.entry("this also should not");
      diary.entry("4th time is the charm #yolo");
      results = ["this should #yolo", "4th time is the charm #yolo"];
      expect(results.toString()).toMatch(
        diary.entriesWithTag("#yolo").toString()
      );
    });
  });

  describe("diaryToday", () => {
    it("return an array of all entries written today", () => {
      diary.entry("one", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
      diary.entry("two");
      diary.entry("three");
      results = ["two", "three"];
      expect(results.toString()).toMatch(diary.today().toString());
    });
  });

  describe("diaryDate", () => {
    it("returns a list of all entries written on the given date", () => {
      diary.entry("one", Date.parse("10/10/10"));
      diary.entry("two", Date.parse("11/11/11"));
      diary.entry("three", Date.parse("12/12/12"));
      results = ["one"];
      expect(results.toString()).toMatch(
        diary.date(Date.parse("10/10/10")).toString()
      );
    });
  });

  describe("diarySearch", () => {});

  describe("diaryCLI", () => {});
});
