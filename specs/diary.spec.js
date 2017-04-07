describe("Diary", function() {
  const Diary = require("../lib/diary");
  const fs = require("fs");
  var diary;
  beforeEach(function() {
    diary = new Diary();
  });

  it("calling entry adds an entry to the users Diary", function() {
    let entry = diary.entry("a");
    expect(entry.length).toEqual(1);
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
    diary.entry("Another post today!");
    diary.entry("OMG. What have I done? #sorrynotsorry");
    diary.entry("OMG. What have I done? #sorrynotsorry", "aug-20-1999");
    let todaysEntry = diary.today();
    expect(todaysEntry).toEqual([
      "Another post today!",
      "OMG. What have I done? #sorrynotsorry"
    ]);
  });

  it(".date returns a list of all entries written on the given date", function() {
    diary.entry("Post 1");
    diary.entry("Post 2", "1978-01-12");
    diary.entry("Post 3", "2010-10-10");
    diary.entry("Post 4", "2010-10-10");

    let date = Date.parse("10/10/10");
    expect(diary.date(date)).toEqual(["Post 3", "Post 4"]);
  });

  it(".search should return a list of all notes with the given string.", function() {
    diary.entry("Today, Brad accidentally touched my hand in the hallway.");
    diary.entry("Brad is a dreamboat.");
    diary.entry("My dad is sooo annoying.");
    expect(diary.search("Brad")).toEqual([
      "Today, Brad accidentally touched my hand in the hallway.",
      "Brad is a dreamboat."
    ]);
  });

  it(".save should persist the current state of the diary the given file.", function() {
    let path = "../data/diaryUpdated.json";
    diary.entry("Brad is a dreamboat.");
    diary.entry("My dad is sooo annoying.");
    diary.save(path);
    let fileExists = fs.existsSync(path);
    expect(fileExists).toEqual(true);
    fs.unlinkSync(path);
  });

  it(".load should load the the diary object with the entries stored in the given file", function() {
    let path = "../data/diaryUpdated.json";
    diary.entry("Brad is a dreamboat.");
    diary.entry("My dad is sooo annoying.");
    diary.save(path);
    let savedEntries = diary.entries();
    let loadedEntries = diary.load(path);
    expect(loadedEntries).toEqual(savedEntries);
  });
});
