const Diary = require("../lib/diary");

describe("diary module", () => {
  it("user entry for diary", () => {
    expect(() => {
      return new Diary();
    }).not.toThrow();
  });
  describe("Contains correct methods", () => {
    it("contains entry method", () => {
      expect(Diary.prototype.entry).toBeTruthy();
    });
  });
});

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
