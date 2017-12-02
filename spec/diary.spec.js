let Entry = require("../entries");

describe("Entry", () => {
  it("is added to user's diary", () => {
    let diary = new Entry("practice string");
    expect(diary.entry).toBe("practice string");
  });
  it("saves a string and an optional time property", () => {
    let time = new Date(Date.now()).toLocaleString();
    let diary = new Entry("practice string", time);
    expect(diary.entry === "practice string" && diary.date === time).toBe(true);
  });
});

// diary.entry("I'm standing outside Brad's house #yolo");
// diary.entry("I'm at Brad's window #yolo");
// diary.entry("OMG. What have I done? #sorrynotsorry");

describe("All Entries", () => {
  it("are returned as an array", () => {
    let allEntries = [];
    let diary = new Entry("practice string");
    allEntries.push({
      id: allEntries.length + 1,
      date: this.date,
      entry: this.entry
    });
    expect(diary.entries()[0].entry).toBe("practice string");
  });
});

describe("All Tags", () => {
  it("should return all tags within a message an an array.", () => {
    let entry = "This is a sample sentence. #yolo #ooyl";
    expect(entry.tags).toBe(["#yolo", "#ooyl"]);
  });
});
