const fs = require('fs');

function Diary() {
  this.data = [];

  this.entries = () => {
    return this.data;
  };

  this.entry = (message, date) => {
    date ? date : date = Date.parse(new Date());

    var tags = checkMessageForTags(message);

    var newEntry = { message, date, tags };
    this.data.push(newEntry);
  };

  this.tags = () => {
    var tags = [];

    this.entries().forEach((entry) => {
      tags.push(entry.tags);
    });

    return [].concat.apply([], tags);
  };

  this.entriesWithTag = (tag) => {
    var applicableEntries = [];

    this.data.forEach((entry) => {
      if (entry.tags.indexOf(tag) !== -1) {
        applicableEntries.push(entry);
      }
    });

    return applicableEntries;
  };

  this.date = (date) => {
    var applicableEntries = [];
    var targetDate = new Date(date);

    this.data.forEach((entry) => {
      var entryDate = new Date(entry.date);

      if (entryDate.setHours(0,0,0,0) == targetDate.setHours(0,0,0,0)) {
        applicableEntries.push(entry);
      }
    });

    return applicableEntries;
  };

  this.today = () => {
    var today = Date.parse(new Date());
    return this.date(today);
  };

  this.search = (term) => {
    term = term.toLowerCase();
    var applicableEntries = [];

    this.data.forEach((entry) => {
      message = entry.message.toLowerCase();
      if (message.indexOf(term) !== -1) {
        applicableEntries.push(entry);
      }
    });

    return applicableEntries;
  };

  this.save = () => {
    var jsonString = JSON.stringify({entries: this.data}, null, 2);
    fs.writeFileSync('./diary.json', jsonString);
  };

  this.load = () => {
    var file = JSON.parse(fs.readFileSync('./diary.json', 'utf8'));
    this.data = file.entries;
  };
}

var checkMessageForTags = (message) => {
  var regex = /#([\w]+)/g;
  var results = [];

  while(tag = regex.exec(message)) {
    results.push(tag[1]);
  }
  return results;
};



module.exports = Diary;
