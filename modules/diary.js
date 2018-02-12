var unless = require('unless')

class Diary {
  constructor() {
    this.entries = []
    this.tags = []
  }

  addEntry(body, date){
    var timestamp;
    date === undefined ? timestamp = new Date() : timestamp = new Date(date);
    this.entries.push([body, timestamp])

    var matches = body.split(' ').filter(word => word.startsWith('#'))
    var uniqueTags = matches.filter(match => !this.tags.includes(match))

    this.tags = this.tags.concat(uniqueTags)
  }

  entriesWithTag(tagName){
    var filteredEntries = this.entries.filter(function(entry){ return entry[0].includes(tagName) });
    return filteredEntries
  }

  today(){
    var _today = new Date().toDateString()
    var todaysEntries = this.entries.filter(function(entry){ return entry[1].toDateString() === _today });

    return todaysEntries
  }

  date(input){}

  search(input){}

  save(dir){}

  load(dir){}
}

var diary = new Diary()
diary.addEntry('mooky mook #juno #fomo')
diary.addEntry("sample entry from the past", "Mon, 25 Dec 1995 13:30:00 GMT")
// console.log(diary.today.length);
// diary.entry('zample clamp')

// console.log(diary.today());

module.exports = Diary

