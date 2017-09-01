const DiaryBuilder = require("../diary");

describe ('Diary', () => {
  var diary = DiaryBuilder;
  beforeEach(function () {
    diary.contents = [];
    diary.contentsTime = [];
  });
  describe ('.entry', () => {
    it(".entry stores in diary", function () {
      const results = diary.entry("Example text");
      expect(results[0]).toEqual("Example text")
    });
    it(".entry stores date and time automatically as second object", function () {
      const results = diary.entry("Example time");
      expect(results[1].toString().slice(0,4)).toEqual('2017');
    });
    it(".entry stores date and time as second argument", function () {
      const results = diary.entry("Example texting", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
      expect(results[1].toString()).toEqual("819898200000")
    });
    it(".entries should return all diary.entry", function () {
      diary.entry("Example");
      diary.entry("Example2");
      const results = diary.entries();
      expect(results).toEqual(["Example", "Example2"]);
    });
    it(".tag should return #strings in diary", function () {
      diary.entry("I'm standing outside Brad's house #yolo");
      diary.entry("I'm at Brad's window #yolo");
      diary.entry("OMG. What have I done? #sorrynotsorry");
      const results = diary.tags();
      expect(results).toEqual(["yolo", "sorrynotsorry"])
    });
    it(".entriesWithTag return a list of every entry with the yolo tag", function () {
      diary.entry("I'm standing outside Brad's house #yolo");
      diary.entry("I'm at Brad's window #yolo");
      diary.entry("OMG. What have I done? #sorrynotsorry");
      const results = diary.entriesWithTag("yolo");
      expect(results).toEqual(["I'm standing outside Brad's house #yolo","I'm at Brad's window #yolo" ])
    });
    it(".today return entries made today", function () {
      diary.entry("Hello", Date.parse("2016/07/11 12:01:00"));
      diary.entry("Today");
      const results = diary.today();
      expect(results).toEqual(["Today"]);
    });
    it(".date returns a list of all entries written on the given date", function () {
      diary.entry("Hello");
      diary.entry("Hello there", Date.parse("10,10,10"));
      diary.entry("Hello there yes", Date.parse("10,10,10"));
      const results = diary.date(Date.parse("10/10/10"));
      expect(results).toEqual(["Hello there", "Hello there yes"]);
    });
    it(".search should return a list of all notes with the given string.", function () {
      diary.entry("Today, Brad accidentally touched my hand in the hallway.");
      diary.entry("Brad is a dreamboat.");
      diary.entry("My dad is sooo annoying.");
      const results = diary.search("Brad");
      expect(results).toEqual(["Today, Brad accidentally touched my hand in the hallway.", "Brad is a dreamboat."]);
    });
    it(".save should persist the current state of the diary the given file.", function () {
      diary.entry("Brad is a dreamboat.");
      const results = diary.save("./.diary");
      expect(results).toEqual(true);
    });
    it(".load should load the the diary object with the entries stored in the given file", function () {
      diary.entry("Brad is a dreamboat.");
      diary.save("./.diary");
      diary.contents = [];
      diary.load("./.diary");
      const results = diary.entries();
      expect(results).toEqual("Brad is a dreamboat.");
    })


  })
})
