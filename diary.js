var Diary = function() {
  this.entries = [];
};

Diary.prototype.entry = function(body, date) {
  var entry = {
    body: body
  };
  if (date) {
    entry.timestamp = date;
  } else {
    entry.timestamp = Date.now();
  }
  this.entries.push(entry);
  return entry;
};

Diary.prototype.entries = function() {
  return this.entries;
};

module.exports = Diary;
