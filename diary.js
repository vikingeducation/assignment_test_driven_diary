const fs = require('fs');
const { displayDateAndTime } = require('./helpers/date_helper');

class Diary {
  constructor() {
    this.data = [];
  }

  entries() {
    return this.data;
  }

  entry(message, date) {
    date = Date.parse(date || new Date());

    var tags = checkMessageForTags(message);
    date = displayDateAndTime(date);

    var newEntry = { message, date, tags };
    this.data.push(newEntry);
    return 'Entry added';
  }

  tags() {
    var tags = [];

    this.entries().forEach((entry) => {
      tags.push(entry.tags);
    });

    return [].concat.apply([], tags);
  }

  entriesWithTag(tag) {
    var applicableEntries = [];

    this.data.forEach((entry) => {
      if (entry.tags.indexOf(tag) !== -1) {
        applicableEntries.push(entry);
      }
    });

    return applicableEntries;
  }

  date(date) {
    date = Date.parse(date);

    var applicableEntries = [];
    var targetDate = new Date(date);

    this.data.forEach((entry) => {
      var entryDate = new Date(entry.date);

      if (entryDate.setHours(0,0,0,0) == targetDate.setHours(0,0,0,0)) {
        applicableEntries.push(entry);
      }
    });

    return applicableEntries;
  }

  today() {
    var today = new Date();
    return this.date(today);
  }

  search(term) {
    term = term.toLowerCase();
    var applicableEntries = [];

    this.data.forEach((entry) => {
      var message = entry.message.toLowerCase();
      if (message.indexOf(term) !== -1) {
        applicableEntries.push(entry);
      }
    });

    return applicableEntries;
  }

  save() {
    var jsonString = JSON.stringify({entries: this.data}, null, 2);

    if (process.env.envType === 'test') {
      fs.writeFileSync('./spec/support/test_diary.json', jsonString);
    } else {
      fs.writeFileSync('./diary.json', jsonString);
    }
  }

  load() {
    var file;

    if (process.env.envType === 'test') {
      file = fs.readFileSync('./spec/support/test_diary.json', 'utf8');
    } else {
      file = fs.readFileSync('./diary.json', 'utf8');
    }

    if (file.trim()) {
      file = JSON.parse(file);
      this.data = file.entries;
    }
  }
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
