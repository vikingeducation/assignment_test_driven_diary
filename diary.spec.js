const Diary = require('./diary.js');
const fs = require('fs');

describe('The diary', () => {
  let diary;

  beforeEach(() => {
    diary = new Diary();
  });

  it("adds an entry to user's diary: diary.entry('test')", () => {
    diary.entry('test');
    expect(diary.entries[0].message).toEqual('test');
  });

  it('accepts second argument as date', () => {
    let date = 'Mon, 25 Dec 1995 13:30:00 GMT';
    diary.entry('test', date);
    expect(diary.entries[0].date).toEqual(819898200000);
  });

  it('should return a list of all entries', () => {
    diary.entry('test');
    diary.entry('test2');
    let entries = diary.getEntries();
    expect(entries).toEqual(['test', 'test2']);
  });

  it('should return all tags in diary', () => {
    diary.entry('test #yolo');
    diary.entry('test2 #haha');
    let entries = diary.tags();
    expect(entries).toEqual(['yolo', 'haha']);
  });

  it('should return a list of all entries with a tag', () => {
    diary.entry('test #yolo');
    diary.entry('test2 #haha');
    let entries = diary.entriesWithTag('yolo');
    expect(entries).toEqual(['test']);
  });

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
