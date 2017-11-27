const Diary = require('./diary.js');
const fs = require('fs');

describe('The diary', () => {

  let diary;

  beforeEach(() => {
    diary = new Diary()
  })

  it("adds an entry to user's diary: diary.entry('test')", () => {
    diary.entry('test')
    expect(diary.entries[0].message).toEqual('test')
  })

  it("accepts second argument as date", () => {
    let date = "Mon, 25 Dec 1995 13:30:00 GMT"
    diary.entry('test', date)
    expect(diary.entries[0].date).toEqual("Mon, 25 Dec 1995 13:30:00 GMT")
  })


  xit('can access diary', () => {
    fs.readFile('./diary.json', 'utf8', (err, data) => {
      if (err) throw err;
      expect(JSON.parse(data)).toEqual({});
    });
  });

  xit('adds an entry to the diary file', () => {
    diary.entry('test');
    fs.readFile('./diary.json', 'utf8', (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      let entryNumber = Object.keys(data).length - 1;
      expect(data[entryNumber]).toEqual('test');
      //delete data[entryNumber]// fs.writefile
    });
  });

  xit('', () => {});
});
