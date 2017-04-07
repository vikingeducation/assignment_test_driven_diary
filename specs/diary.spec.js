describe("Diary", function() {
  const Diary = require("../lib/diary");
  var diary;
  beforeEach(function() {
    diary = new Diary();
  });

  it("calling entry adds an entry to the users Diary", function() {
    let entryLength = diary.entry("a").length;
    expect(entryLength).toEqual(1);
  });
  it("calling entry with a date adds an entry to the users Diary", function() {
    let entriesLength = diary.entry("a", "adsf").length;
    expect(entriesLength).toEqual(1);
  });

  it("adding a hashtag should add the tag to an entry", function() {
    let tags = diary.entry("abc #123")[0].tags;
    expect(tags).toEqual(["#123"]);
  });

  it(".entries should return a list of all entries.", function() {
    let entriesLength = diary.entries().length;
    expect(entriesLength).toBeDefined();
  });
  it(".tags should return a list of tags for all entries", function() {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window #yolo");
    diary.entry("OMG. What have I done? #sorrynotsorry");
    let tags = diary.tags();
    expect(tags).toEqual(["#yolo", "#sorrynotsorry"]);
  });
  it(".entriesWithTag return a list of every entry with the yolo tag", function() {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window #yolo");
    diary.entry("OMG. What have I done? #sorrynotsorry");
    let listOfEntries = diary.entriesWithTag("#yolo");
    expect(listOfEntries).toEqual([
      "I'm standing outside Brad's house #yolo",
      "I'm at Brad's window #yolo"
    ]);
  });
  it(".today returns a list of all entries written today", function() {
    diary.entry("OMG. What have I done? #sorrynotsorry");
    diary.entry("OMG. What have I done? #sorrynotsorry", "aug-20-1999");
    let todaysEntry = diary.today();
    expect(todaysEntry).toEqual(["OMG. What have I done? #sorrynotsorry"]);
  });
});
