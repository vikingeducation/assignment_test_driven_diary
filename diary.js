var Diary = function() {
  this.entries = [];
  this.tags = new Set();
};

Diary.prototype.entry = function(body, date) {
  var entry = {
    body: body,
    tags: []
  };
  if (date) {
    entry.timestamp = date;
  } else {
    entry.timestamp = new Date();
  }
  let tags = getTagsFromBody(body);
  if (tags) {
    let _that = this;
    tags.forEach(function(tag) {
      _that.tags.add(tag);
    });
    entry.tags = tags;
  }
  this.entries.push(entry);
  return entry;
};

Diary.prototype.entries = function() {
  return this.entries;
};

Diary.prototype.getTags = function() {
  return [...this.tags];
};

Diary.prototype.entriesWithTag = function(tag) {
  let results = [];
  this.entries.forEach(function(message) {
    if (message.tags.includes(tag)) {
      results.push(message);
    }
  });
  return results;
};

Diary.prototype.today = function() {
  const todaysDate = new Date();
  var results = [];
  this.entries.forEach(function(message) {
    if (message.timestamp.toDateString() === todaysDate.toDateString()) {
      results.push(message);
    }
  });
  return results;
};

Diary.prototype.date = function(date) {
  var results = [];
  this.entries.forEach(function(message) {
    if (message.timestamp.toDateString() === date.toDateString()) {
      results.push(message);
    }
  });
  return results;
};

getTagsFromBody = function(body) {
  var r = RegExp(/\B\#\w+/g);
  let matches = body.match(r);
  if (matches) {
    let tags = matches.map(function(tag) {
      return tag.substring(1);
    });
    return tags;
  }
};

module.exports = Diary;
