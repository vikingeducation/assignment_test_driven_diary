'use strict';
const fs = require('fs');

class Diary {
  constructor() {
    this.entries = [];
  }
  entry(string, date) {
    if (date === undefined) {
      data = new Date();
      date = date.toString('yyyy-MM-dd');
    }
    tag = string.split('#')[1];
    this.entries.push({ data: date, message: string, tag: tag });
  }
  entries() {
    return this.entries;
  }
  // entry: string => {
  //   fs.readFile('./diary.json', 'utf8', (err, data) => {
  //     if (err) throw err;
  //     data = JSON.parse(data);
  //     let entryNumber = Object.keys(data).length.toString();
  //     data[entryNumber] = string;
  //     fs.writeFile('./diary.json', JSON.stringify(data), err => {
  //       if (err) {
  //         console.error(err);
  //       }
  //     });
  //   });
  // }
}

module.exports = Diary;

//Diary.entry("sldjfskd")
