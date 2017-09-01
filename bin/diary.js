#!/usr/bin/env node

var diary = require("../diary");
var diaryPath ='diary.txt'
diary.load(diaryPath);
switch (process.argv[2]) {
  case 'entry':
    diary.entry(process.argv[3]);
    diary.save(diaryPath)
    console.log("Duly Noted");
    break;
  case 'entries':
    console.log(diary.entries());
    break;
  case 'tags':
    console.log(diary.tags);
    break;
  case 'entriesWithTag':
    console.log(diary.entriesWithTag(process.argv[3]));
    break;
  case 'today':
    console.log(diary.today());
    break;
  case 'date':
    console.log(diary.date(process.argv[3]));
    break;
  case 'search':
    console.log(diary.search(process.argv[3]));
    break;
  default:
    console.log("---Diary-Help---\nValid commands are:\ndiary entry \"Entry text here\"\ndiary entries\ndiary tags\ndiary entriesWithTag \"#example\"\ndiary today\ndiary date \"1265220000\"\ndiary search \"long day\"\n---End-Help---\n");
}
diary.save(diaryPath);
