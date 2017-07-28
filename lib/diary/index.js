let fs = require("fs");
class Diary {
  constructor(filename) {
    this.filename = filename ? `./data/${filename}` : "./data/diary.json";
    this.tagsArr = [];
  }

  entry(text, date) {
    let diary = _readDiary(this.filename);
    let entry = _getTags(text);
    date = date || new Date();
    diary.entries = diary.entries || [];
    diary.entries.push({
      text: entry.text,
      date: date.toString(),
      tags: entry.tags
    });
    entry.tags.forEach(tag => {
      if (!this.tagsArr.includes(tag)) this.tagsArr.push(tag);
    });
    _writeDiary(this.filename, diary);
  }

  entries() {
    return _readDiary(this.filename).entries;
  }

  tags() {
    return this.tagsArr;
  }

  entriesWithTag(tag) {
    let diary = _readDiary(this.filename);
    return diary.entries.filter(entry => {
      return entry.tags.includes(tag);
    });
  }

  today() {
    let diary = _readDiary(this.filename);
    return diary.entries.filter(entry => {
      return new Date().toString().slice(0, 11) === entry.date.slice(0, 11);
    });
  }

  date(date) {
    let diary = _readDiary(this.filename);
    return diary.entries.filter(entry => {
      return date.toString().slice(0, 11) === entry.date.slice(0, 11);
    });
  }
}

function _readDiary(filename) {
  let file = fs.readFileSync(filename, "utf8");
  return JSON.parse(file);
}

function _writeDiary(filename, diary) {
  let json = JSON.stringify(diary, null, 2);
  fs.writeFileSync(filename, json);
}

function _getTags(text) {
  let entryParts = text.split("#");
  entryParts = entryParts.map((part, index) => {
    return part.trim();
  });
  return {
    text: entryParts[0],
    tags: entryParts.slice(1)
  };
}

module.exports = Diary;
