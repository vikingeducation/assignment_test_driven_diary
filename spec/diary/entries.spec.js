const { entries } = require("../../lib/diary");
const fs = require("fs");

const file = "./diary/diary.txt"

describe("The entries method", function() {

  beforeEach(()=> {
    fs.writeFileSync(file, 'entry1\nentry2')
  })

  it("should return a list of all entries", function() {
    let newEntries = entries();
    let expectedArray = ['entry1', 'entry2']

    expect(newEntries).toEqual(expectedArray);
  });
});
