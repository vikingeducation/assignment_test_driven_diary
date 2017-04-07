const Diary = require("../lib/diary");

describe("Diary", () => {
  let diary;

  beforeEach(() => {
    diary = new Diary();
  });

  describe(".entry", () => {
    //test 1
    it("creates a new diary entry item without date", () => {
      diary.entry("Jerry is so cool");

      expect(diary._entries[0].text).toEqual("Jerry is so cool");

      //expect(diary._entries[0].date).toBeCloseTo(Date.now(), 0);
    });

    //test 2
    it("creates a new diary entry item with date", () => {
      diary.entry(
        "Deven is so cool",
        Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
      );
      expect(diary._entries[0]).toEqual({
        text: "Deven is so cool",
        date: 819898200000
      });
    });

    //test 3
    it("does not create a tag for an entry without a hashtag", () => {
      diary.entry("Jerry is so cool");
      expect(Object.keys(diary._tags).length).toEqual(0);
    });

    //test 4
    it("creates a tag for an entry with a hashtag", () => {
      diary.entry("Deven is so cool #vikings");
      expect(Object.keys(diary._tags).length).toEqual(1);
    });

    //test 5
    it("records the index of the diary entry using its tag", () => {
      diary.entry("Jerry is super smart #smartypants");
      diary.entry("Jerry is also super cool #smartypants");
      expect(diary._tags.smartypants).toEqual([0, 1]);
    });

    //test 6
    it("stores all the tags in the diary", () => {
      diary.entry("Jerry is super smart #smartypants");
      diary.entry("Jerry is also super cool #cooldude");
      expect(diary.tags()).toEqual(["smartypants", "cooldude"]);
    });
  }); // end of describe(.entry)

  describe(".entries", () => {
    // test 7
    it("returns all of the entries in a diary", () => {
      diary.entry("Jerry is so cool");
      diary.entry("Deven is so cool");
      expect(diary.entries()[0].text).toEqual("Jerry is so cool");
      expect(diary.entries()[1].text).toEqual("Deven is so cool");
    });
  });

  describe(".entriesWithTag", () => {
    //test 8
    it("returns entries for a given tag", () => {
      diary.entry("Jerry is super smart #awesome");
      diary.entry("Jerry is super smart #smartypants");
      diary.entry("Jerry is also super cool #cooldude");
      expect(diary.entriesWithTag("smartypants")[0].text).toEqual(
        "Jerry is super smart #smartypants"
      );
      expect(diary.entriesWithTag("smartypants").length).toEqual(1);
    });
  });

  describe(".today", () => {
    // test 9
    it("returns entries within the past 24 hours", () => {
      diary.entry("Yes", Date.now());
      diary.entry("No", Date.now() - 86400001);
      expect(diary.today()[0].text).toEqual("Yes");
      expect(diary.today().length).toEqual(1);
    });
  });

  describe(".date", () => {
    // test 10
    it("returns entries on that date", () => {
      diary.entry("Yes", Date.parse('4/7/2017'));
      diary.entry("No", Date.parse('4/6/2017'));
      expect(diary.date(Date.parse('4/7/2017'))[0].text).toEqual("Yes");
      expect(diary.date(Date.parse('4/7/2017')).length).toEqual(1);
    });
  });
});
