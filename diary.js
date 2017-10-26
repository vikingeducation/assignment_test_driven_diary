let Diary = function() {
  this.entries = [];
  this.tags = [];
};

Diary.prototype.entry = function(input, date) {
  let entry = { message: input };

  if (date) {
    entry.createTime = date;
  } else {
    entry.createTime = Date.now();
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

module.exports = Diary;