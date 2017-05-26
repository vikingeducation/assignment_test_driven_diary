const fs = require('fs');

class Diary {

  constructor () {
    this.allEntries = [];
    this.taggedEntries = {};
  }

  entry(message, date) {
    let data = {
      message,
      date: date || "none"
    };

    this._checkTags(message);

    this.allEntries.push(data);
    return 'Duly Noted!';
  }

  entries() {
    let messages = this.allEntries.map(entry => {
      return entry.message + "\nDate: " + entry.date;
    });

    return messages;
  }

  tags() {
    let tags = [];
    for (let tag in this.taggedEntries) {
      tags.push(tag);
    }

    return tags;
  }

  entriesWithTag(tag) {
    return this.taggedEntries[tag];
  }

  _checkTags(message) {
    let hash = /#/;
    let hasHash = message.match(hash);
    
    if (hasHash) {
      let messageSegments = message.split('#');
      let tag = messageSegments[messageSegments.length - 1];

      // instantiates array if new tag
      this.taggedEntries[tag] = this.taggedEntries[tag] || [];
      this.taggedEntries[tag].push(message);
    }
  }

  today() {
    let today = Date.now();
    return this.date(today);
  }

  date(inputDate) {
    let oneDay = 86400000;
    let results = [];
    
    this.allEntries.forEach(entry => {
      let dateDifference = entry.date - inputDate;

      if (dateDifference < oneDay && dateDifference >= 0) {
        results.push(entry.message);
      }

    });
    return results;
  }

  search(term) {
    term = term.toLowerCase();
    let results = [];

    this.allEntries.forEach(entry => {
      let message = entry.message.toLowerCase();
      if (message.includes(term)) {
        results.push(entry.message);
      }
    });

    return results;
  }

  save(path) {
    let data = {
      Entries: this.allEntries
    }
    fs.writeFileSync(path, JSON.stringify(data));
  }

  load(path) {
    let data = fs.readFileSync(path, 'utf8');
    data = JSON.parse(data);
    this.allEntries = data["Entries"];
  }
}

module.exports = Diary;