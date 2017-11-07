// const diary = require('./diary.json');

function _findTags(text) {
  const words = text.split(' ');
  const tags = [];
  words.forEach(word => {
    if (word[0] === '#') {
      tags.push(word.slice(1));
    }
  });
  return tags;
}
class Diary {
  constructor(diary) {
    this.diary = diary;
  }
  entry(text, date = Date.now()) {
    const tags = _findTags(text);
    this.diary.entries.push({
      entryText: text,
      timeOfEntry: date,
      tags: tags
    });
    return 'Entry added.';
  }
  entries() {
    return this.diary.entries;
  }
  tags() {
    const entries = this.diary.entries;
    let tags = [];
    entries.forEach(entry => {
      tags = tags.concat(entry.tags);
    });
    const uniqueTags = new Set(tags);
    tags = Array.from(uniqueTags);
    return tags;
  }
  entriesWithTag(tag) {
    const entries = this.diary.entries;
    const taggedEntries = [];
    entries.forEach(entry => {
      if (entry.tags.includes(tag)) {
        taggedEntries.push(entry);
      }
    });
    return taggedEntries;
  }
}

module.exports = Diary;
