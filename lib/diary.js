var json = "./data/diary.json";
const fs = require("fs");

function Diary() {}

// "Mon, 25 Dec 1995 13:30:00 GMT"
Diary.prototype.entry = (str, date) => {
  if (!date) {

    date = `${Date.getDay()}, ${Date.getDate()} ${Date.getFullYear()} ${}`;
  }
  let entry = `${str} - ${date}`;
  fs.appendFileSync(json, entry);
  return entry;
};

module.exports = Diary;
//
