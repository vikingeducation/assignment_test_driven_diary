const { today } = require("../../lib/diary");
const fs = require("fs");

const file = "./diary/diary.txt";

describe("The today method", function() {
  beforeEach(() => {
    let testDate1 = Date.parse('10/10/2010')
    let testDate2 = Date.parse('10/9/2010')
    fs.writeFileSync(file, `${testDate1}:lorem ipsum\n${testDate2}:other`);
  });

  it("should return a list of all entries written today", function() {
    let todaysEntries = today();
    let expectedArray = ['other'];
    expect(todaysEntries).toEqual(expectedArray);
  });
});