#!/usr/bin/env node
const Diary = require('./src/diary');

const diary = new Diary();
const path = './diary.json';
const args = process.argv.slice(2);
const command = args[0];

function _logReply(replies) {
  replies.forEach(reply => console.log(reply));
}

diary.load(path);

switch (command) {
  case 'entry':
    if (args[2]) {
      args[2] = Date.parse(args[2]);
    }
    _logReply(diary.entry(args[1], args[2]));
    break;
  case 'entries':
    _logReply(diary.entries());
    break;
  case 'tags':
    _logReply(diary.tags());
    break;
  case 'tag':
    _logReply(diary.entriesWithTag(args[1]));
    break;
  case 'today':
    _logReply(diary.today());
    break;
  case 'date':
    _logReply(diary.date(args[1]));
    break;
  case 'search':
    _logReply(diary.search(args[1]));
    break;
  default:
    console.log("I don't recognize that command.");
}

diary.save(path);
