var jsonPath = "./data/diary.json";
var dateFormatter = require("./dateFormatter");
const fs = require("fs");

//const diary = {};

class Diary {
  constructor() {
    this._entries = [];
    this._tags = [];
  }

  entry(str, date) {
    let entry = {};
    if (!date) {
      date = this.setDate();
    }
    entry.body = str;
    entry.date = date;
    entry.tags = this.parseForTags(str);
    this._entries.push(entry);
    return this._entries;
  }

  entries() {
    return this._entries;
  }

  tags() {
    this._entries.forEach(entry => {
      entry.tags.forEach(tag => {
        if (!this._tags.includes(tag)) {
          this._tags.push(tag);
        }
      });
    });
    return this._tags;
  }
  entriesWithTag(str) {
    let entries = this._entries.filter(entry => {
      return entry.tags.includes(str);
    });
    return entries.map(entry => {
      return entry.body;
    });
  }
  parseForTags(str) {
    return str.match(/#\S+/g);
  }
  setDate(input) {
    if (!input) {
      input = new Date();
    } else {
      input = new Date(input);
    }
    var date = input.getFullYear() +
      "-" +
      (input.getMonth() + 1) +
      "-" +
      input.getDate();
    return date;
  }

  today() {
    let today = this.setDate();
    let entries = this._entries.filter(entry => {
      return entry.date == today;
    });
    return entries.map(entry => {
      return entry.body;
    });
  }

  date(date) {
    date = this.setDate(date);
    let entries = this._entries.filter(entry => {
      return entry.date == date;
    });
    return entries.map(entry => {
      return entry.body;
    });
  }

  search(str) {
    let entries = this._entries.filter(entry => {
      var regexp = new RegExp(str, "gi");
      return entry.body.match(regexp);
    });
    return entries.map(entry => {
      return entry.body;
    });
  }
  save(path) {
    fs.writeFileSync(path, JSON.stringify(this._entries));
  }
}
//
// var regexstring = "whatever";
// var regexp = new RegExp(regexstring, "gi");
// var str = "whateverTest";
// var str2 = str.replace(regexp, "other");

module.exports = Diary;
