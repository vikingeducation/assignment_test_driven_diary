const Diary = function() {
  this.diary = [];

  this.entry = function(message, date) {
    if (typeof message !== "string")
      throw new Error("First param must be string");
    date = date || Date.now();

    let diaryEntry = {
      message,
      date
    };
    this.diary.push(diaryEntry);
    return diaryEntry;
  };
  this.entries = function() {
    return this.diary;
  };
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

  this.entriesWithTag = function(tag) {
    let tagEntries = [];
    this.diary.forEach((entry) => {
      if(entry.message.includes(`${tag}`)) tagEntries.push(entry);
    })
    return tagEntries;
  }

  this.date = function(date) {
    let dateEntries = [];
    this.diary.forEach((entry) => {
      if(entry.date === date) dateEntries.push(entry);
    })
    return dateEntries;
  }

  this.today = function() {
    return this.date(Date.now());
  }
};

module.exports = Diary;
