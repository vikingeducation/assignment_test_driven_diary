'use strict';
const fs = require('fs');

class Diary {
  constructor() {
    this.entries = [];
  }
  entry(string, date) {
    if (date === undefined) {
      date = new Date();
      // date = date.toString('yyyy-MM-dd');
    }
    let tag = string.split('#')[1];
    date = Date.parse(date);
    this.entries.push({ date: date, message: string, tag: tag });
  }
  getEntries() {
    return this.entries.map(obj => obj.message);
  }
  tags() {
    return this.entries.map(object => {
      return object.tag;
    });
  }
  entriesWithTag(tag) {
    let array = this.entries.filter(obj => {
      if (obj.tag === tag) {
        return true;
      } else {
        return false;
      }
    });
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
