'use strict';
const fs = require('fs');

const Diary = {
  entry: string => {
    fs.readFile('./diary.json', 'utf8', (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      let entryNumber = Object.keys(data).length.toString();
      data[entryNumber] = string;
      fs.writeFile('./diary.json', JSON.stringify(data), err => {
        if (err) {
          console.error(err);
        }
      });
    });
  }
};

// module.exports = diary;

Diary.entry('Steve & Jeff');
