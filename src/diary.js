function Diary() {
  this.entriesLog = []
}

Diary.prototype.entry = function(entry, customDate) {
  var d = new Date().toString();
  if (customDate) {
    entry = `${entry} ~Written on ${customDate}`;
  } else {
    entry = `${entry} ~Written on ${d}`;
  }

  this.entriesLog.push(entry)
  return entry

};

Diary.prototype.entries = function() {
  return this.entriesLog;
}

Diary.prototype.tags = function() {
  this.entriesLog.forEach(entry => {
    if (entry.match(/#/) {
      
    }
  })
}

module.exports = Diary;
