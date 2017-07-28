let fs = require("fs");
class Diary {
  constructor(filename) {
    this.filename = filename ? `./data/${filename}` : "./data/diary.json";
  }
  entry(text, date) {
    let diary = _readDiary(this.filename);
    date = date || new Date();

    diary.entries = diary.entries || [];
    diary.entries.push({
      text: text,
      date: date.toString()
    });
    _writeDiary(this.filename, diary);
  }
}

function _readDiary(filename) {
  let file = fs.readFileSync(filename, "utf8");
  return JSON.parse(file);
}

function _writeDiary(filename, diary) {
  let json = JSON.stringify(diary);
  fs.writeFileSync(filename, json);
}
module.exports = Diary;
