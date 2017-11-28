const fs = require('fs');
const _ = require("underscore")

const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

class Diary {
  constructor() {
    this.store = [];
  }

  entry(string, date = new Date()) {
    let tag;
    if (string.split('').includes('#')) {
      tag = string.split('#')[1];
    }

    this.store.push({
      entry: string,
      date: date,
      tag: tag
    });

    return "Duly Noted!";

  }

  entries() {
    return this.store;
  }

  tags() {
    return _.uniq(this.store.map(entryObj => entryObj.tag));
  }

  entriesWithTag(hashtag) {
    return this.store.map((entryObj) => {
      if (entryObj.tag == hashtag) {
        return entryObj.entry;
      }
    })
  }

  today() {
    const today = new Date();
    return this.store.map((entryObj) => {
      if (today - entryObj.date < DAY_MILLISECONDS) {
        return entryObj.entry;
      }
    })
  }

  date(targetDate) {
    return this.store.map((entryObj) => {
      if (targetDate - entryObj.date < DAY_MILLISECONDS) {
        return entryObj.entry;
      }
    })
  }

  search(searchTerm) {
    return this.entries()
      .map(entryObj => entryObj.entry)
      .filter(entry => {
        let regex = new RegExp(searchTerm);
        return regex.test(entry);
      })
  }

  save(path) {
    fs.writeFileSync(path, JSON.stringify(this.store, null, 2));
  }

  load(path) {
    this.store = JSON.parse(fs.readFileSync(path, 'utf8'));
  }

}

module.exports = Diary;

// ------------------------ CLI Application ------------------------

console.log(process.argv[0])

if (process.argv[0] === "/usr/local/heroku/bin/node") {

let diary = new Diary();

if (process.argv.length < 4) {
  console.error("Too few arguments")
}

if (fs.existsSync("./diary.txt")) {
  diary.load("./diary.txt");
}
console.log(
  diary[process.argv[2]](process.argv[3])
)
diary.save("./diary.txt");

}
