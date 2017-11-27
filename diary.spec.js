const diary = require('./diary.js')
const fs = require('fs')


describe("The diary", () => {
  it("can access diary", () => {
    fs.readFile("./diary.json", "utf8", (err, data) => {
        if(err) throw err
        expect(JSON.parse(data)).toEqual({})
      })
  });

  xit("adds an entry to the diary file", () => {

  });

  xit("", () => {

  });
})
