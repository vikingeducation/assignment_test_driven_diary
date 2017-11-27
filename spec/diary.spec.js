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
