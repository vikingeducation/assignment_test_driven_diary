let fs = require("fs");
class Diary {
  constructor() {
    this.tagArr = [];
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
      if (!this.tagArr.includes(tag)) this.tagArr.push(tag);
    });
  }

  entries() {
    return this.entryArr;
  }

  tags() {
    return this.tagArr;
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

  save(name) {
    name = _fileName(name);
    let json = JSON.stringify(
      { entries: this.entryArr, tags: this.tagArr },
      null,
      2
    );
    fs.writeFileSync(name, json);
  }

  load(name) {
    name = _fileName(name);
    let fileDiary;
    try {
      fileDiary = JSON.parse(fs.readFileSync(name, "utf8"));
    } catch (ENOENT) {
      console.log("Empty diary. Creating a new one.");
    }
    if (fileDiary) {
      this.entryArr = fileDiary.entries;
      this.tagArr = fileDiary.tags;
    }
  }
}

function _fileName(name) {
  return name ? `./data/${name}.json` : "./data/diary.json";
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
