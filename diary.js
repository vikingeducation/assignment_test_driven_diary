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
  // let _entries_proto = [
  //   {
  //     message:
  //   }
  // ];

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
  //old
  this.tags = function() {
    let hashWords = [];
    this.diary.forEach(entry => {
      let entryWords = entry.message.trim().split(" ");
      for (let i = 0; i < entryWords.length; i++) {
        if (entryWords[i].includes("#")) {
          hashWords.push(entryWords[i].slice(1));
        }
      }
    });
    return hashWords;
  };
  //old
  this.entriesWithTag = function(tag) {
    let tagEntries = [];
    this.diary.forEach(entry => {
      if (entry.message.includes(`${tag}`)) tagEntries.push(entry);
    });
    return tagEntries;
  };
  //old
  this.date = function(date) {
    let dateEntries = [];
    this.diary.forEach(entry => {
      if (entry.date === date) dateEntries.push(entry);
    });
    return dateEntries;
  };
  //old
  this.today = function() {
    return this.date(Date.now());
  };
};

module.exports = Diary;
