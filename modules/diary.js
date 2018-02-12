var unless = require('unless')

class Diary {
  constructor() {
    this.entries = []
    this.tags = []
  }

  addEntry(body, date){
    date === undefined ? date = Date.now() : date = Date.parse(date);
    this.entries.push([body, date])
    var matches = body.split(' ').filter(word => word.startsWith('#'))
    var uniqueTags = matches.filter(match => !this.tags.includes(match))

    this.tags = this.tags.concat(uniqueTags)
  }

  entriesWithTag(tagName){
    var filteredEntries = this.entries.filter(function(entry){ return entry[0].includes(tagName) });
    return filteredEntries
  }

  today(){
    var now = Date.now()
  }

  date(input){}

  search(input){}

  save(dir){}

  load(dir){}
}

// var diary = new Diary()
// diary.entry('mooky mook #juno #fomo')
// diary.entry('zample clamp')

// console.log(diary.entries[0].includes('mooky mook'));

module.exports = Diary

