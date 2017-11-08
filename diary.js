const fs = require('fs');

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
  // constructor(diary) {
  //   this.diary = diary;
  // }
  load(path) {
    const data = fs.readFileSync(path, 'utf8');
    const diary = JSON.parse(data);
    this.diary = diary;
    // return diary;
  }
  save(path) {
    const data = JSON.stringify(this.diary, null, 2);
    fs.writeFile(path, data, 'utf8', err => {
      if (err) throw err;
    });
    return 'Diary saved.';
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
  today() {
    const today = new Date().toDateString();
    const entries = this.diary.entries;
    const todaysEntries = [];
    entries.forEach(entry => {
      const dayOfEntry = new Date(entry.timeOfEntry).toDateString();
      if (dayOfEntry === today) {
        todaysEntries.push(entry);
      }
    });
    return todaysEntries;
  }
  date(date) {
    const requestedDayOfEntry = new Date(date).toDateString();
    const entries = this.diary.entries;
    const datedEntries = [];
    entries.forEach(entry => {
      const dayOfEntry = new Date(entry.timeOfEntry).toDateString();
      if (dayOfEntry === requestedDayOfEntry) {
        datedEntries.push(entry);
      }
    });
    return datedEntries;
  }
  search(query) {
    const entries = this.diary.entries;
    const entriesWithQuery = [];
    entries.forEach(entry => {
      if (entry.entryText.includes(query)) {
        entriesWithQuery.push(entry);
      }
    });
    return entriesWithQuery;
  }
}

module.exports = Diary;
