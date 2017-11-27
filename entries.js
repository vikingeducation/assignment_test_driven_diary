//id, entries, tags (array), date (optional)

let Entry = function(str, time) {
  this.entry = str;
  this.date = time || "none";
};

module.exports = Entry;
