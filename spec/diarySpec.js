const Diary = require("../lib/diary");

describe("Diary", () => {
  let diary;

  beforeEach(() => {
    diary = new Diary();
  });

  describe(".entry", () => {
    it("creates a new diary entry item without date", () => {
      diary.entry("Jerry is so cool.");

      expect(diary._entries[0].text).toEqual("Jerry is so cool.");

      //expect(diary._entries[0].date).toBeCloseTo(Date.now(), 0);
    }); // end of it

    it("creates a new diary entry item with date", () => {
      diary.entry(
        "Deven is so cool.",
        Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
      );
      expect(diary._entries[0]).toEqual({
        text: "Deven is so cool.",
        date: 819898200000
      });
    }); // end of it
  });
});
