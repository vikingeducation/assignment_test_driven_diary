const Diary = require('./src/diary.js');


const args = process.argv;
const diaryArgs = args.slice(2);
const diary = new Diary();
diary.load('./src/diary.json');


switch (diaryArgs[0]) {
  case 'entry':
    diary.entry(diaryArgs[1], diaryArgs[2]);
    diary.save('./src/diary.json');
    console.log('Duly noted!');
    break;
  case 'entries':
    const result = diary.entries();
    result.forEach((el, idx) => {
      console.log(`Log #${idx + 1}`);
      console.log(`Message: ${el.log}`)
      console.log(`Created: ${el.creation} \n`)
    });
    break;
  case 'tags':
    const tags = diary.tags();
    tags.forEach((tag, idx) => {
      console.log(`Tag #${idx + 1}: ${tag}`);
    });
    break;
  case 'entriesWithTag':
    const results = diary.entriesWithTag(diaryArgs[1]);
    results.forEach((el, idx) => {
      console.log(`Entry #${idx + 1}: ${el.log}`)
    });
    break;
  case 'search':
    const searchResults = diary.search(diaryArgs[1]);
    searchResults.forEach((el, idx) => {
      console.log(`Search Result #${idx + 1}: ${el.log}`)
    });
    break;
  default:
    console.log('Enter valid commands!');
}
