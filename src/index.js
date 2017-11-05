const fs = require('fs');

class Diary {
  constructor() {
    this.logs = [];
  }

  entry(sent, time) {
    if (time) {
      this.logs.push({
        log: sent,
        creation: time
      });

      return this.logs[0].creation;
    }

    this.logs.push({
      log: sent,
      creation: new Date().toLocaleString()
    });

    return this.logs[0].log;
  }

  entries() {
    return this.logs;
  }

  tags() {
    const containsHashTag = [];

    this.logs.forEach((log) => {
      if (log.log.includes('#')) {
        let hashIdx = log.log.indexOf('#');
        let hashWord = log.log.slice(hashIdx + 1);

        containsHashTag.includes(hashWord) ? null : containsHashTag.push(hashWord);
      }
    });

    return containsHashTag;
  }

  entriesWithTag(tag) {
    const tagEntries = [];

    this.logs.filter((log) => {
      let sent = log.log;
      sent.includes(tag) ? tagEntries.push(log) : null;
    });

    return tagEntries;
  }

  search(str) {
    const matchesSearch = [];

    this.logs.filter((log) => {
      let sent = log.log;
      sent.includes(str) ? matchesSearch.push(log) : null;
    });

    return matchesSearch;
  }

  save(filePath) {
    fs.writeFileSync(filePath, JSON.stringify({
      logs: this.logs
    }, null, 2));
  }
}


module.exports = Diary;
