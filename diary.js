#!/usr/bin/env node
const Diary = require('./lib/diary');
const diary = new Diary();
const path = './.data';

let args = process.argv.slice(2, process.argv.length);
let command = args[0].toLowerCase();

diary.load(path);

const printMessages = (messages) => {
  messages.forEach(message => console.log(message));
};

if (command === 'entry') {
  if(args[2]) {
    args[2] = Date.parse(args[2]);
  }
  diary.entry(args[1], args[2]);
} else if (command === "entries") {
  printMessages(diary.entries());
} else if (command === "tags") {
  printMessages(diary.tags());
} else if (command === "entrieswithtag") {
  printMessages(diary.entriesWithTag(args[1]));
} else if (command === "today") {
  printMessages(diary.today());
} else if (command === "date") {
  let dayToSearch = Date.parse(args[1]);
  printMessages(diary.date(dayToSearch));
} else if (command === "search") {
  printMessages(diary.search(args[1]));
}

diary.save(path);
