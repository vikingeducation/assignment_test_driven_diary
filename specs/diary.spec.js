describe("Diary", function() {
  const Diary = require("../lib/diary");
  var diary;
  beforeEach(function() {
    diary = new Diary();
  });

  it("calling entry adds an entry to the users Diary", function() {
    expect(diary.entry("a").length).toEqual(1);
  });
  it("calling entry with a date adds an entry to the users Diary", function() {
    expect(diary.entry("a", "adsf").length).toEqual(1);
  });

  it("adding a hashtag should add the tag to an entry", function() {
    expect(diary.entry('abc #123')[0].tags).toEqual(['#123']);
  });

  it(".entries should return a list of all entries.", function() {
    expect(diary.entries().length).toBeDefined();
  });

});
