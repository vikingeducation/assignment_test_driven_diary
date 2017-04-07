class Diary {
  constructor() {
    this.entriesLog = [];
  }

  entry(entry, customDate) {
    var date = new Date().toString();

    if (customDate) {
      entry = `${entry} ~Written on ${customDate}`;
    } else {
      entry = `${entry} ~Written on ${date}`;
    }

    this.entriesLog.push(entry);
    return entry;
  }

  entries() {
    return this.entriesLog;
  }

  //Begin tag functions
  getTags() {
    let tagsList = []
    this.entriesLog.forEach(entry => {
      entry = entry.match(/#\w+/);
      entry = entry[0].substring(1);
      tagsList.push(entry);
    })
    return tagsList
  }

  tags() {
    let tags = []
    let tagsList = this.getTags()
    //Filters duplicates
    tagsList.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    })

    return tags;
  }


  entriesWithTag(tag) {
    let entriesWithTags = [];

    this.entriesLog.forEach(entry => {
      let tagMatch = entry.match(/#\w+/);
      if (tagMatch[0].substring(1) === tag) {
        entriesWithTags.push(entry)
      }
    })
    return entriesWithTags
  }

}

module.exports = Diary;
