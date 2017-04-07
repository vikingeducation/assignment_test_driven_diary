class Diary {
  constructor() {
    this.entriesLog = [];
  }

  entry(entry, customDate) {
    var newEntry = {};

    if (customDate) {
      newEntry['entry'] = entry;
      newEntry['date'] = customDate;
    } else {
      var d = newDate();
      var date = d.getDate() + '/' + d.getMonth() + '/' + d.getYear();
      newEntry['entry'] = entry;
      newEntry['date'] = date;
    }

    this.entriesLog.push(newEntry);
    return newEntry.entry;
  }

  entries() {
    return this.entriesLog;
  }

  //Begin tag functions
  getTags() {
    let tagsList = [];
    this.entriesLog.forEach(entry => {
      entry = entry.match(/#\w+/);
      entry = entry[0].substring(1);
      tagsList.push(entry);
    });
    return tagsList;
  }

  tags() {
    let tags = [];
    let tagsList = this.getTags();
    //Filters duplicates
    tagsList.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });

    return tags;
  }

  entriesWithTag(tag) {
    let entriesWithTags = [];

    this.entriesLog.forEach(entry => {
      let tagMatch = entry.match(/#\w+/);
      if (tagMatch[0].substring(1) === tag) {
        entriesWithTags.push(entry);
      }
    });
    return entriesWithTags;
  }

  today() {}
}

module.exports = Diary;
