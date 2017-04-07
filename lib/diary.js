const fs = require("fs");

// JSON structure:
// entries: [
//  { text: "", date: Date.now() }
// ]

class Diary {
  constructor() {
    this._entries = [];
    this._tags = {};
    this._dailyMilliseconds = 86400000;
  }

  // _tags = {
  //   "yolo": [0, 4]
  // }

  entry(text, date = Date.now()) {
    let entryItem = {
      text,
      date
    };
    const tag = this._parseTag(text);
    if (tag) {
      const entryIndex = this._entries.length;
      this._addTag(tag, entryIndex);
    }
    this._entries.push(entryItem);
  }

  entries() {
    return this._entries;
  }

  entriesWithTag(inputTag) {
    var results = [];
    // var keyArr = this.tags();

    var entryIndices = this._tags[inputTag];
    // suppose inputTag = "smartypants"
    // entryIndices = [0,1]
    entryIndices.forEach(index => {
      results.push(this._entries[index]);
    });
    return results;
  }

  tags() {
    return Object.keys(this._tags);
  }

  today() {
    var results = [];
    this._entries.forEach(entry => {
      if (Date.now() - entry.date < this._dailyMilliseconds) {
        results.push(entry);
      }
    })
    return results;
  }

  date(inputDate) {
    var results = [];
    this._entries.forEach(entry => {
      if (Math.abs(inputDate - entry.date) < this._dailyMilliseconds) {
        results.push(entry);
      }
    });
    return results;
  }

  search(input) {}

  save(path) {
    let json = { "entries": this._entries };
    fs.writeFileSync(path, JSON.stringify(json, null, 2));
  }

  load(path) {
    const json = JSON.parse(fs.readFileSync(path));
    this._entries = json.entries;
  }

  _parseTag(text) {
    // ['#yolo', 'yolo', index, sentence]
    const match = /#(\w+)/.exec(text);
    if (match) return match[1];
  }

  _addTag(name, entryIndex) {
    this._tags[name] = this._tags[name] || [];
    this._tags[name].push(entryIndex);
  }
}

module.exports = Diary;
