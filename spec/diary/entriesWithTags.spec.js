const { entriesWithTags } = require("../../lib/diary");
const fs = require("fs");

const file = "./diary/diary.txt";

describe("The entriesWithTags method", function() {
  beforeEach(() => {
    fs.writeFileSync(file, "entry1 #yolo #running\nentry2 #chocolate\nentry3 #yolo");
  });

  it("should return a list of all entries with the parameter tag", function() {
    let tagList = entriesWithTags('yolo');
    let expectedArray = ["entry1 #yolo #running", "entry3 #yolo"];
    expect(tagList).toEqual(expectedArray);
  });
});