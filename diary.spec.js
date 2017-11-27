const diary = require('./diary.js');
const fs = require('fs');

describe('The diary', () => {
  xit('can access diary', () => {
    fs.readFile('./diary.json', 'utf8', (err, data) => {
      if (err) throw err;
      expect(JSON.parse(data)).toEqual({});
    });
  });

  it('adds an entry to the diary file', () => {
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
