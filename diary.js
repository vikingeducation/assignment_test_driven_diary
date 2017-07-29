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
    let uniqueCheck = true;
    if (!uniqueCheck) {
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
    } else {
      var allTags = {};
      for (let i = 0; i < _entries.length; i++) {
        let entry = _entries[i];
        for (let j = 0; j < entry.tags.length; j++) {
          allTags[entry.tags[j]] = entry.tags[j];
        }
      }
    }
    console.log(Object.keys(allTags));
    let arr = Object.keys(allTags);
    //console.log(arr);
    return arr;
    //console.log(allTags);
    //let arr = Array.from(allTags.values());
    //console.log(`arr ${arr}`);
    //return Array.from(allTags);
    return allTags;
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
