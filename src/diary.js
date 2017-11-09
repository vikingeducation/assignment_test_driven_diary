const fs = require('fs');

function _format(entries) {
  const formattedEntries = [];

  entries.sort((a, b) => {
    return a.timeOfEntry - b.timeOfEntry;
  });

  entries.forEach(entry => {
    const dateObj = new Date(entry.timeOfEntry);
    const time = dateObj.toTimeString().slice(0, 5);
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    formattedEntries.push(
      `${time} ${date}/${month}/${year} - ${entry.entryText}`
    );
  });
  return formattedEntries;
}

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
  load(path) {
    const data = fs.readFileSync(path, 'utf8');
    const diary = JSON.parse(data);
    this.diary = diary;
    // for testing
    // return diary;
  }
  save(path) {
    const data = JSON.stringify(this.diary);
    fs.writeFile(path, data, 'utf8', err => {
      if (err) throw err;
    });
    // for testing
    // return 'Diary saved.';
  }
  entry(text, date = Date.now()) {
    const tags = _findTags(text);
    this.diary.entries.push({
      entryText: text,
      timeOfEntry: date,
      tags: tags
    });
    return ['Duly noted!'];
  }
  entries() {
    const entries = this.diary.entries;
    return _format(entries);
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
    let taggedEntries = [];
    entries.forEach(entry => {
      if (entry.tags.includes(tag)) {
        taggedEntries.push(entry);
      }
    });
    return _format(taggedEntries);
  }
  today() {
    const today = new Date().toDateString();
    const entries = this.diary.entries;
    let todaysEntries = [];
    entries.forEach(entry => {
      const dayOfEntry = new Date(entry.timeOfEntry).toDateString();
      if (dayOfEntry === today) {
        todaysEntries.push(entry);
      }
    });
    return _format(todaysEntries);
  }
  date(date) {
    const requestedDayOfEntry = new Date(date).toDateString();
    const entries = this.diary.entries;
    let datedEntries = [];
    entries.forEach(entry => {
      const dayOfEntry = new Date(entry.timeOfEntry).toDateString();
      if (dayOfEntry === requestedDayOfEntry) {
        datedEntries.push(entry);
      }
    });
    return _format(datedEntries);
  }
  search(query) {
    const entries = this.diary.entries;
    let entriesWithQuery = [];
    entries.forEach(entry => {
      if (entry.entryText.includes(query)) {
        entriesWithQuery.push(entry);
      }
    });
    return _format(entriesWithQuery);
  }
}

module.exports = Diary;
