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

  date(inputDate){
    inputDate === undefined ? inputDate = new Date().toDateString() : inputDate = new Date(inputDate).toDateString()
    var filteredEntries = this.entries.filter(function(entry){ return entry[1].toDateString() === inputDate });
    return filteredEntries
  }

  search(input){
    if (input === undefined) {
      throw new Error('Please enter a search term')
    } else {
      input = input.trim().toLowerCase()
    }
    var filteredEntries = this.entries.filter(function(entry){ return entry[0].toLowerCase().includes(input) });
    return filteredEntries
  }

  save(dir){}

  load(dir){}
}

// var diary = new Diary()
// diary.addEntry('Mooky Mook #juno #fomo')
// diary.addEntry("sample entry from the past", "Mon, 25 Dec 1995 13:30:00 GMT")
// diary.search()
// diary.date("12/25/1995")
// console.log(diary.today.length);
// diary.entry('zample clamp')

// console.log(diary.today());

module.exports = Diary

