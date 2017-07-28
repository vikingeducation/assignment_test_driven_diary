const Diary = require("../lib/diary");

describe("diary", () => {
  it("exists and is a constructor", () => {
    expect(() => {
      return new Diary();
    }).not.toThrow();
  });

  const diary = new Diary();

  describe("entry method", () => {
    beforeEach(() => {
      diary.diaryEntries = [];
    });
    it("exists and is a function", () => {
      expect(Diary.prototype.entry && isFunction(Diary.prototype.entry)).toBe(
        true
      );
    });

    it("will not accept an empty string", () => {
      expect(diary.entry("") && diary.entry(" ")).toBe(false);
    });

    it("can successfully add entries", () => {
      let msg = "Brad is everything to me.";
      diary.entry(msg);
      expect(diary.diaryEntries.some(entry => entry.msg === msg)).toBe(true);
    });

    it("creates an entry without an undefined gmtCreated value", () => {
      let msg = "Brad is everything to me.";
      diary.entry(msg);
      expect(
        diary.diaryEntries.some(entry => {
          return entry.msg === msg && entry.gmtCreated !== undefined;
        })
      ).toBe(true);
    });

    it("can accept an optional date argument", () => {
      let msg = "Brad. Brad. Brad. Brad. Brad.";
      let gmtCreated = new Date().getTime();
      diary.entry(msg, gmtCreated);
      expect(
        diary.diaryEntries.some(entry => {
          return entry.msg === msg && entry.gmtCreated === gmtCreated;
        })
      ).toBe(true);
    });
    it("creates an entry that guarantees date is a number", () => {
      let msg = "Brad is everything to me.";

      diary.entry(msg, "This is not a number");
      expect(
        diary.diaryEntries.some(entry => {
          return entry.msg === msg && Number.isInteger(entry.gmtCreated);
        })
      ).toBe(true);
    });
  });
});

function isFunction(x) {
  return Object.prototype.toString.call(x) == "[object Function]";
}

// diary.entry("Brad is everything to me.");

// diary.entry("<3 Braaaad <3");
// // .entry adds an entry to the user's diary.
// // each note should contain the time/date of its creation.
//
// diary.entry(
//   "Brad. Brad. Brad. Brad. Brad.",
//   Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
// );
// // .entry may take an optional date argument, which will be set
// // as its time of creation
//
// diary.entries();
// // .entries should return a list of all entries.
//
// diary.entry("I'm standing outside Brad's house #yolo");
// diary.entry("I'm at Brad's window #yolo");
// diary.entry("OMG. What have I done? #sorrynotsorry");
//
// diary.tags();
// // .tags this should return ['yolo', 'sorrynotsorry']
//
// diary.entriesWithTag("yolo");
// // .entriesWithTag return a list of every entry with the yolo tag
//
// diary.today();
// // .today returns a list of all entries written today
//
// diary.date(Date.parse("10/10/10"));
// // .date returns a list of all entries written on the given date
//
// diary.entry("Today, Brad accidentally touched my hand in the hallway.");
// diary.entry("Brad is a dreamboat.");
// diary.entry("My dad is sooo annoying.");
//
// diary.search("Brad");
// // .search should return a list of all notes with the given string.
//
// diary.save("./.diary");
// // .save should persist the current state of the diary the given file.
//
// diary.load("./.diary");
// // .load should load the the diary object with the entries stored i
