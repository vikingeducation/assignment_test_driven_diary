const Diary = require("../diary");
let diary = new Diary();
const commands = process.argv.slice(2);

function entry(args) {
  if (!args.length) {
    console.log("Please include some text for your entry");
  } else {
    let text = args[0];
    let date = args[1];
    diary.entry(text, date);
  }
}

function entries() {
  _display(diary.entries());
}

function tags(args) {
  if (args.length) _display(diary.entriesWithTag(args[0]));
  else console.log(diary.tags().join(", "));
}

function today() {
  _display(diary.today());
}

function date(args) {
  if (!args.length) console.log("Please include a date to display");
  else _display(diary.date(Date.parse(args[0])));
}

function search(args) {
  if (!args.length) console.log("Please include a search query");
  else _display(diary.search(args[0]));
}

function _display(entries) {
  entries.forEach(entry => {
    console.log(`${entry.date}: ${entry.text} - ${entry.tags.join(", ")}`);
  });
}

const diaryMap = {
  entry: entry,
  entries: entries,
  tags: tags,
  today: today,
  date: date,
  search: search
};

function init() {
  if (!commands.length) {
    console.log("Welcome to your diary. Please try again with a command:");
    console.log("entry, entries, tags, today, date, search");
  } else {
    diary.load("diary");
    diaryMap[commands[0]](commands.slice(1));
    diary.save("diary");
  }
}

module.exports = init;
