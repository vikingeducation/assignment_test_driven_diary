describe("Diary", function() {
  const Diary = require("../lib/diary");
  var diary;
  beforeEach(function() {
    diary = new Diary();
  });

  it("calling entry adds an entry to the users Diary", function() {
    expect(diary.entry("a").length).toEqual(1);
  });
  it("Calling entry() with single param will result in a return array length 1", function() {
    expect(diary.entry("a", "adsf").length).toEqual(1);
  });
  xit("display single entry from diary", function() {
    expect(diary.entries()).toEqual();
  });
});
