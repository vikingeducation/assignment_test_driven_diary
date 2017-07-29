const Entry = function(message, date) {
  // this.proto = {
  //   message,
  //   date,
  //   tags: []
  // };
  this.message = message;
  this.date = date || Date.now();

  //tags
  //TODO: do this with a RegEx capture group
  function checkForTags(message) {
    let entryWords = message.trim().split(" ");
    let tags = entryWords.filter(word => {
      return word.includes("#");
    });
    return tags || [];
  }
  this.tags = checkForTags(this.message);
};

const Diary = function() {
  let _entries = [];
  let fs = require("fs");

  this.entry = function(message, date) {
    if (typeof message !== "string") {
      throw new Error("First param must be string");
    }
    _entries.push(new Entry(message, date));
  };
  this.getEntry = function(index) {
    return _entries[index];
  };
  this.entries = function() {
    return _entries;
  };
  this.tags = function() {
    //iterate over all messages and grab all the tags
    let allTags = [];
    for (let i = 0; i < _entries.length; i++) {
      let entry = _entries[i];
      //allTags.push(_entries[i].tags);
      //Array.prototype.push.apply(allTags, _entries.tags);
      for (let j = 0; j < entry.tags.length; j++) {
        //allTags[entry.tags[j]] = entry.tags[j];
        allTags.push(entry.tags[j]);
      }
    }

    //why this '...' ?
    return [...new Set(allTags)];
  };
  this.entriesWithTag = function(tag) {
    let entriesWithTag = [];
    _entries.forEach(entry => {
      if (entry.tags.includes(`${tag}`)) {
        entriesWithTag.push(entry);
      }
    });
    return entriesWithTag;
  };
  this.date = function(date) {
    let dateEntries = [];
    _entries.forEach(entry => {
      if (entry.date === date) dateEntries.push(entry);
    });
    return dateEntries;
  };
  this.today = function() {
    return this.date(Date.now());
  };
  this.search = function(text) {
    let matchingEntries = [];
    _entries.forEach(entry => {
      if (entry.message.includes(text)) {
        matchingEntries.push(entry);
      }
    });
    return matchingEntries;
  };
  this.save = function(path) {
    let json = JSON.stringify(_entries, null, " ");
    fs.writeFileSync(path, json);
  };
  this.load = function(path) {
    let json = fs.readFileSync(path);
    let diary = JSON.parse(json);
    this._entries = diary;
  };
};

module.exports = Diary;
