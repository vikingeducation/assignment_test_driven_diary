const Diary = require('./diary');

let diary = new Diary();
let args = process.argv.slice(2);
let result;

diary.load(__dirname+'/diary.json');


switch (args[0]) {
    case 'entry':
        result = diary.entry(args[1], args[2]);
        break;
    case 'entries':
        result = diary.entries;
        break;
    case 'tags':
        result = diary.tags;
        break;
    case 'entriesWithTag':
        result = diary.entriesWithTag(args[1]);
        break;
    case 'date':
        result = diary.date(new Date(args[1]));
        break;
    case 'today':
        result = diary.today();
        break;
    case 'search':
        result = diary.search(args[1]);
        break;

    default:
        result = `Invalid input`
        break;
}

console.log(result);

diary.save(__dirname+'/diary.json');