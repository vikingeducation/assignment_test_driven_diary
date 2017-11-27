//id, entries, tags (array), date (optional)
Dairy = [ {separate entry}, {#2} ];

let Entry = function(str, time) {
  this.entry = str;
  this.date = time || "none";
  allEntries.push({
    id: allEntries.length + 1,
    date: this.date,
    entry: this.entry,
    tags: this.tags || none
  });
  this.entries = () => {
    allEntries.map(entry => {
      console.log(entry.entry);
    });
    return allEntries;
  };
  this.tags = () => {
    let words = this.entry.split(" ");
    return words.filter(word => word[0] === "#");
  };
};

module.exports = Entry;
