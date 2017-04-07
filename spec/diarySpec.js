const Diary = require("../lib/diary");

describe("Diary", () => {
  let diary;

  beforeEach(() => {
    diary = new Diary();
  });

  describe(".entry", () => {
    it("creates a new diary entry item without date", () => {
      diary.entry("Jerry is so cool");

      expect(diary._entries[0].text).toEqual("Jerry is so cool");

      //expect(diary._entries[0].date).toBeCloseTo(Date.now(), 0);
    });

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

    it('does not create a tag for an entry without a hashtag', () => {
      diary.entry('Jerry is so cool');
      expect(diary._entries[0]).toBeUndefined();
    });

    it('creates a tag for an entry with a hashtag', () => {
      diary.entry('Deven is so cool #vikings');
      expect(diary._entries[0]).toEqual('vikings');
    });

    it('stores all the tags in the diary');
  });

  describe('.entries', () => {
    it('returns all of the entries in a diary', () => {
      diary.entry("Jerry is so cool");
      diary.entry("Deven is so cool");
      expect(diary.entries()[0].text).toEqual("Jerry is so cool");
      expect(diary.entries()[1].text).toEqual("Deven is so cool");
    });
  });
});
