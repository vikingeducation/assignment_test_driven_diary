class Diary {

  constructor() {
    this.entriesLog = [];
  }

  getFormattedDate() {
      var todayTime = new Date();
      var month = todayTime.getMonth() + 1
      var day = todayTime.getDate()
      var year = todayTime.getFullYear()
      return month + "/" + day + "/" + year;
  }

  entry(entry, customDate) {
    var newEntry = {};

    if (customDate) {
      newEntry['body'] = entry;
      newEntry['date'] = customDate;
    } else {
      newEntry['body'] = entry;
      newEntry['date'] = this.getFormattedDate();
    }

    this.entriesLog.push(newEntry);
    return newEntry;
  }

  entries() {
    return this.entriesLog;
  }

  //Begin tag functions
  getTags() {
    let tagsList = [];
    this.entriesLog.forEach(entry => {
      let tagMatch = entry.body.match(/#\w+/);
      let tag = tagMatch[0].substring(1);
      tagsList.push(tag);
    })
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
      let tagMatch = entry.body.match(/#\w+/);
      if (tagMatch[0].substring(1) === tag) {
        entriesWithTags.push(entry);
      }
    });
    return entriesWithTags;
  }

  today() {
    todaysEntries = [];
    todaysDate = this.getFormattedDate()
    this.entriesLog.forEach(entry => {
      if (entry.date === todaysDate) {
        todaysEntries.push(entry);
      }
    })
    return todaysEntries;
  }
}

module.exports = Diary;
