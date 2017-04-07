const fs = require("fs");

// JSON structure:
// entries: [
//  { text: "", date: Date.now() }
// ]

class Diary {
  constructor() {
    this._entries = [];
  }

  entry(text, date = Date.now()) {
    let entryItem = {
      text,
      date
    };
    this._entries.push(entryItem);
  }

  entries() {}

  entriesWithTag(inputTag) {}

  tags(inputTag) {}

  today() {}

  date(inputDate) {}

  search(input) {}

  save(path) {}

  load(path) {}
}

module.exports = Diary;
