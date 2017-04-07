const fs = require('fs');

// JSON structure:
// entries: [
//  { text: "", date: Date.now() }
// ]

class Diary {
  constructor() {
    this.entryItems = [];
  }

  entry(text, date = Date.now()) {
    let entryItem = {
      text, date
    }
    this.entryItems.push(entryItem);
  }

  entries() {

  }

  entriesWithTag(inputTag) {

  }

  tags(inputTag) {

  }

  today() {

  }

  date(inputDate) {

  }

  search(input) {

  }

  save(path) {

  }

  load(path) {

  }
}

module.exports = Diary;
