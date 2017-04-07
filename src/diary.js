class Diary {

  constructor() {
    this.entriesLog = []
  };

  entry(entry, customDate) {
    var date = new Date().toString();

    if (customDate) {
      entry = `${entry} ~Written on ${customDate}`;
    } else {
      entry = `${entry} ~Written on ${date}`;
    }

    this.entriesLog.push(entry)
    return entry

  };
  
  entries() {
    return this.entriesLog;
  };

  tags() {
    tagsList = []
    this.entriesLog.forEach(entry => {
      entry = entry.match(/#\w+/)
      //stopping point
      }
    })
  };

}

module.exports = Diary;
