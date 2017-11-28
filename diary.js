#!/usr/local/bin/node

class Diary {
  constructor() {
    this.entryArr = [];
    this.tagArray = [];
  }

  entry(str, date) {
    let entryObj = {};
    entryObj.entryTag = '';
    entryObj.body = str;
    if (date) entryObj.date = date;
    else {
      entryObj.date = Date.parse(Date());
    }
    let splitArray;
    if (/\#/.test(entryObj.body)) {
      splitArray = entryObj.body.split(' ');
      splitArray.map(el => {
        if (el[0] === '#') {
          entryObj.entryTag = el;
          if (!this.tagArray.includes(el)) {
            this.tagArray.push(el.substring(1));
          }
        }
      });
    }
    this.entryArr.push(entryObj);
  }
  tags() {
    return this.tagArray;
  }
  entriesWithTag(string) {
    let resultArray = [];
    this.entryArr.map(el => {
      if (string === el.entryTag) {
        resultArray.push(el.body);
      }
    });
    return resultArray;
  }
  today() {
    let tempArray = [];
    this.entryArr.map(el => {
      let day = new Date();
      let elDay = new Date(el.date);
      if (
        day.getDate() === elDay.getDate() &&
        day.getMonth() === elDay.getMonth() &&
        day.getYear() === elDay.getYear()
      ) {
        tempArray.push(el.body);
      }
    });
    return tempArray;
  }
  date(input) {
    let date = new Date(input);
    let dateArray = [];
    this.entryArr.map(el => {
      let elDay = new Date(el.date);
      if (
        date.getDate() === elDay.getDate() &&
        date.getMonth() === elDay.getMonth() &&
        date.getYear() === elDay.getYear()
      ) {
        dateArray.push(el.body);
      }
    });
    return dateArray;
  }
  search(string) {
    let resultArray = [];
    this.entryArr.map(el => {
      if (el.body.includes(string)) {
        resultArray.push(el.body);
      }
    });
    return resultArray;
  }
  save(path) {
    const fs = require('fs');
    fs.writeFileSync(path, JSON.stringify(this), 'utf8');
  }
  load(path) {
	  const fs = require('fs');
	  return fs.readFileSync(path, 'utf8');
  }
}
if(process.argv.length > 3){
let argArr = process.argv.slice(2);
console.log(process.argv);
console.log(argArr);
let diary = new Diary();
process.stdout(diary[`${argArr[0]}`](argArr.slice(1)));
}
module.exports = Diary;
