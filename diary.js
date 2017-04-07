#!/usr/local/bin/node
var Diary = require('./lib/diary');
var diary = new Diary();



let methodName = process.argv[2];
let argument = process.argv[3];
diary[methodName](argument);

console.log(`WHAT DO YOU WANT TO DO NOW!? You can say save, load, tag, search, entries,...`);

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(str) {
  console.log(`WHAT DO YOU WANT TO DO NOW!? You can say save, load, tag, search, entries,...`);
  str = str.trim();
  if (str === 'save') {
    diary.save('./diary.json');
    console.log('saved file at ./diary.json');
  } else if (str === 'load'){
    let loadedFile = diary.load('./diary.json');
    console.log(loadedFile);
  } else if (str === 'tag') {
    console.log('we really dont know what this is supposed to do at this point')
  } else {
    console.log('that might actually be valid input. but we don\'t know. because this CLI interface is sort of unclear. Goodbye!')
    process.exit();
  }
});
