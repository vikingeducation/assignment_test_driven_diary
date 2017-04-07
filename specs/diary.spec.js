var Diary = require('../lib/diary');

describe("Diary", function() {
  var diary = new Diary();

  it("says in the diary", function() {
    expect(diary.entry("a","b")).toEqual("in the diary");
  });
});
