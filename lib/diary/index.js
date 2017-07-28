let fs = require("fs");
class Diary {
  constructor(filename) {
    this.filename = filename ? `./data/${filename}` : "./data/diary.json";
  }
  entry(text) {
    let diary = _readDiary(this.filename);
    diary.entries = diary.entries || [];
    diary.entries.push(text);
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
