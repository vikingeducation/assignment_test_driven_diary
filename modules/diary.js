var fs = require('fs');
// var cp = require('child_process');
// const path = require('path');


class Diary {
  constructor() {
    this.entries = []
    this.tags = []
    this.path = './data/diary.json';
  }

  addEntry(body, date){
    this.load()
    var timestamp;
    date === undefined ? timestamp = new Date() : timestamp = new Date(date);
    this.entries.push([body, timestamp])

    var matches = body.split(' ').filter(word => word.startsWith('#'))
    var uniqueTags = matches.filter(match => !this.tags.includes(match))

    this.tags = this.tags.concat(uniqueTags)
    this.save()
  }

  listEntries(){
    this.load()
    console.log(this.entries);
  }

  listTags(){
    this.load()
    console.log(this.tags);
  }

  entriesWithTag(tagName){
    this.load()

    var filteredEntries = this.entries.filter(function(entry){ return entry[0].includes(tagName) });
    return filteredEntries
  }

  today(){
    this.load()

    var _today = new Date().toDateString()
    var todaysEntries = this.entries.filter(function(entry){ return entry[1].toDateString() === _today });

    return todaysEntries
  }

  date(inputDate){
    this.load()

    inputDate === undefined ? inputDate = new Date().toDateString() : inputDate = new Date(inputDate).toDateString()
    var filteredEntries = this.entries.filter(function(entry){ return entry[1].toDateString() === inputDate });
    return filteredEntries
  }

  search(input){
    this.load()
    if (input === undefined) {
      throw new Error('Please enter a search term')
    } else {
      input = input.trim().toLowerCase()
    }

    var filteredEntries = this.entries.filter(function(entry){ return entry[0].toLowerCase().includes(input) });
    return filteredEntries
  }

  save() {
    let data = { entries: this.entries, tags: this.tags };
    data = JSON.stringify(data, null, 2);
    return fs.writeFileSync(this.path, data);
  }

  load() {
    var data = fs.readFileSync(this.path, 'utf8');
    data = JSON.parse(data)

    this.entries = data.entries;
    this.tags = data.tags;
  }

}

module.exports = Diary



var diary = new Diary()
// diary.search('mook')
// diary.addEntry("it's mardi gras day #tired #yolo #fomo")
// diary.addEntry("sample entry from the past", "Mon, 25 Dec 1995 13:30:00 GMT")
// diary.load()
// diary.save()
diary.listEntries()

