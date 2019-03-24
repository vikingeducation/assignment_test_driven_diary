const fs = require('fs');

class Diary {
  constructor(entries) {
    this.entries = entries || [];
  }
  entry(text, timestamp=Date.now()) {
    this.entries.push({
      text: text,
      time: timestamp
    })
  }
  tags() {
    let taggedWords = [];

    this.entries.forEach( (entry) => {
      let words = entry.text.split(" ");
      words.forEach( word => {
        if (word[0] === '#') {
          let removedHashtag = word.substring(1);
          taggedWords.push(removedHashtag);
        }
      });
    })
    return taggedWords
  }
  entriesWithTag(tag) {
    let entriesWithTag = [];
    this.entries.forEach( entry => {
      if (entry.text.includes('#' + tag)) {
        entriesWithTag.push(entry.text);
      }
    });
    return entriesWithTag;
  }
  today() {
    let todaysEntrys = [];
    let todaysDate = new Date().getDate();
    this.entries.forEach( entry => {
      console.log(entry.time)
      let dateObj = new Date(entry.time)
      if (dateObj.getDate() == todaysDate) {
        todaysEntrys.push(entry.text)
      }
    });
    return todaysEntrys;
  }
  date(date) {
    let dateInt = new Date(date).getDate(),
        results = [];

    this.entries.forEach( entry => {
      let tempDate = new Date(entry.time).getDate()

      if (tempDate == dateInt) {
        results.push(entry.text);
      }
    });
    return results;
  }
  search(term) {
    let matches = [];
    this.entries.forEach( entry => {

      if (entry.text.includes(term)) {
        matches.push(entry.text)
      }
    })
    return matches;
  }
  save(path) {
    let data = JSON.stringify( this.entries );
    fs.writeFileSync(path, data);
  }
  load(path) {
    var stringedData = fs.readFileSync(path, 'utf8');

    if (stringedData) {
      this.entries = JSON.parse(stringedData)
    }
    // let data = JSON.parse( fs.readFileSync(path, 'utf8') )
    // return new Diary(data);
    // console.log(data)
  }
}

module.exports = Diary;
