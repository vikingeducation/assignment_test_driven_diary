const fs = require("fs");

// JSON structure:
// entries: [
//  { text: "", date: Date.now() }
// ]

class Diary {
  constructor() {
    this._entries = [];
    this._tags = {};
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

  today() {}

  date(inputDate) {}

  search(input) {}

  save(path) {}

  load(path) {}

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
