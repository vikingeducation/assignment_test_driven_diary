function Diary() {}

Diary.prototype.entry = function(entry, customDate) {
  if (customDate) {
    return `${entry} ~Written on ${customDate}`;
  }
  var d = new Date().toString();
  return `${entry} ~Written on ${d}`;
};

module.exports = Diary;
