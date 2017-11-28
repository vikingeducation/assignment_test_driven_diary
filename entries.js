let diary = require("./mainDiary");

let Entry = function(str, time) {
  this.entry = str;
  this.date = time || "none";
  diary.push({
    id: diary.length + 1,
    date: this.date,
    entry: this.entry,
    tags: this.tags || "none"
  });
  this.entries = () => {
    diary.map(entry => {
      console.log(entry.entry);
    });
    return diary;
  };
  this.tags = () => {
    let words = this.entry.split(" ");
    return words.filter(word => word[0] === "#");
  };
};

module.exports = Entry;
