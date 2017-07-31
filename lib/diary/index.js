let fs = require("fs");
class Diary {
  constructor(filename) {
    this.filename = filename ? `./data/${filename}` : "./data/diary.json";
    this.tagsArr = [];
    this.entryArr = [];
  }

  entry(text, date) {
    let entry = _getTags(text);
    date = date || new Date();
    this.entryArr.push({
      text: entry.text,
      date: date.toString(),
      tags: entry.tags
    });
    entry.tags.forEach(tag => {
      if (!this.tagsArr.includes(tag)) this.tagsArr.push(tag);
    });
  }

  entries() {
    return this.entryArr;
  }

  tags() {
    return this.tagsArr;
  }

  entriesWithTag(tag) {
    return this.entryArr.filter(entry => {
      return entry.tags.includes(tag);
    });
  }

  today() {
    return this.entryArr.filter(entry => {
      return new Date().toString().slice(0, 16) === entry.date.slice(0, 16);
    });
  }

  date(date) {
    return this.entryArr.filter(entry => {
      return new Date(date).toString().slice(0, 16) === entry.date.slice(0, 16);
    });
  }

  search(query) {
    return this.entryArr.filter(entry => {
      return entry.text.includes(query);
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
  entryParts = entryParts.map(part => {
    return part.trim();
  });
  return {
    text: entryParts[0],
    tags: entryParts.slice(1)
  };
}

module.exports = Diary;
