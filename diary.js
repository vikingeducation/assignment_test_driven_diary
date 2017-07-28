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
};

module.exports = Diary;
