#!/usr/bin/env node
const Diary = require('./diary');
var diary = new Diary();
diary.load();

var command = process.argv[2];
var args = process.argv.slice(3);

var commandRequiresMultipleArgs = !args[0] && command !== 'entries' && command !== 'tags' && command !== 'today';

if (!command || command === 'data' || command === 'help' || command === '--help' || commandRequiresMultipleArgs) {
  console.error('Invalid arguments');
  console.log('You can use the following arguments:\n' +
    '1. entries - (for list of diary entries)\n' +
    '2. entry < message > < optional dateString > - (to add a new entry)\n' +
    '3. tags - (for list of all tags in the current entries)\n' +
    '4. entriesWithTag < tagName > - (for list of all entries with given tag)\n' +
    '5. date < someDateString > - (for list of all entries on given date)\n' +
    '5. today - (for list of all entries from today)\n' +
    '5. search < searchTerm > - (for list of all entries that include the search term)\n'
  );
} else {
  console.log(diary[command](args[0], args[1]));
  if (command === 'entry') {
    diary.save();
  }
}
