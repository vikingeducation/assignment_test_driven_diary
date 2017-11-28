let Entry = require("../entries");

describe("Entry", () => {
  it("is added to user's diary", () => {
    let entry = new Entry("practice string");
    expect(entry.entry).toBe("practice string");
  });
  it("saves a string and an optional time property", () => {
    let time = new Date(Date.now()).toLocaleString();
    let entry = new Entry("practice string", time);
    expect(entry.entry === "practice string" && entry.date === time).toBe(true);
  });
});

describe("All Entries", () => {
  it("are returned as an array", () => {
    let diary = [];
    let entry = new Entry("practice string");
    diary.push({
      id: diary.length + 1,
      date: this.date,
      entry: this.entry
    });
    expect(entry.entries()[0].entry).toBe("practice string");
  });
  // it("with a specific tag returned as an array", ("#yolo") => {
  // });
});

describe("All Tags", () => {
  it("should return all tags within a message an an array.", () => {
    let entry = new Entry("This is a sample sentence. #yolo #ooyl");
    expect(entry.tags()[0]).toBe("#yolo");
  });
});
