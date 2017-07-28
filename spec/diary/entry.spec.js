const { entry } = require("../../lib/diary");
const fs = require("fs");

const file = "./diary/diary.txt"

describe("The entry method", function() {
  beforeEach(()=> {
    fs.writeFileSync(file, '')
  })

  it("should add a diary entry with date", function() {
    let newEntry = entry(
      "Hello World!",
      Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
    );
  let expected = fs.readFileSync(file).toString();
    expect(expected).toEqual(
      Date.parse("Mon, 25 Dec 1995 13:30:00 GMT") + ":Hello World!\n"
    );
  });
});
