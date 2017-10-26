const fs = require('fs');

let Diary = function() {
  this.entries = [];
  this.tags = [];
};

Diary.prototype.entry = function(input, date) {
  let entry = { message: input };

  if (date) {
    entry.createTime = date;
  } else {
    entry.createTime = new Date();
  }


  let tag = input.split(' #')[1];
  if (tag) {
    entry.tag = tag;
    if (!this.tags.includes(tag)) this.tags.push(tag);
  } else {
    entry.tag = '';
  }

  this.entries.push(entry);
  return entry;
};

Diary.prototype.entriesWithTag = function(tag) {
  let results = [];

  this.entries.forEach(item => {
    if (item.tag === tag) results.push(item.message);
  });

  return results;
};

Diary.prototype.today = function() {
  const todaysDate = new Date();
  let results = [];

  this.entries.forEach(item => {
    if (item.createTime.toDateString() === todaysDate.toDateString()) {
      results.push(item.message);
    }
  });

  return results;
};

Diary.prototype.date = function(date) {
  let results = [];

  this.entries.forEach(item => {
    if (item.createTime.toDateString() === date.toDateString()) {
      results.push(item.message);
    }
  });

  return results;
};

Diary.prototype.search = function(input) {
  var results = [];

  this.entries.forEach(item => {
    if (item.message.match(input)) {
      results.push(item.message);
    }
  });
  return results;
};

Diary.prototype.save = function(filename) {
  fs.writeFileSync( filename, 
    JSON.stringify({
      entries: this.entries,
      tags: this.tags
    })
  );
};

Diary.prototype.load = function(filename) {
  let result = JSON.parse(fs.readFileSync(filename, 'utf8'));
  this.entries = result.entries;
  this.tags = result.tags;
};


module.exports = Diary;