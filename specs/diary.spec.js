describe("Diary", function() {
  var diary = require("../lib/diary");
  beforeEach(function() {
    diary.stored = ["this is the only entry"];
  });

  it("Two params entered in diary", function() {
    expect(diary.entry("a", "b")).toEqual("a - b");
  });
  it("Single param entered in diary", function() {
    expect(diary.entry("a")).toEqual(`a - ${Date.now()}`);
  });
  xit("display single entry from diary", function() {
    expect(diary.entries()).toEqual();
  });
});
