var jsonPath = "./data/diary.json";
var dateFormatter = require("./dateFormatter");
const fs = require("fs");

//const diary = {};

class Diary {
  constructor() {
    this._entries = [];
  }

  entry(str, date) {
    let entry = {};
    if (!date) {
      date = Date.now();
    }
    entry.body = str;
    entry.date = date;
    entry.tags = this.parseForTags(str);
    this._entries.push(entry);
    return this._entries;
  }

  entries(){
    return this._entries;
  }

  parseForTags(str) {
    return str.match(/#\S+/g);
  }
}

// diary.entry = (str, date) => {
//   if (!date) {
//     var date = new Date();
//     console.log("---" + Date.now());
//     var formattedDate = dateFormatter.format(date);
//   }
//   let entry = `${str} - ${formattedDate}`;
//   fs.readFile(jsonPath, "utf8", (err, data) => {
//     data = JSON.parse(data, null, 2);
//     data.push(entry);
//     fs.writeFileSync(jsonPath, JSON.stringify(data));
//   });
//   return entry;
// };
//
// var d = diary;
// d.entry("hello world");

module.exports = Diary;
