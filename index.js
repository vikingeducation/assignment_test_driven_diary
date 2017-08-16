const Diary = require('./src/diary');

let diary = new Diary();
let args = process.argv.slice(2);
let response;

diary.load(__dirname+'/data.json');


switch (args[0]) {
    case 'entry':
        response = diary.entry(args[1], args[2]);
        break;
    case 'entries':
        response = diary.entries();
        break;
    case 'tags':
        response = diary.tags();
        break;
    case 'entriesWithTag':
        response = diary.entriesWithTag(args[1]);
        break;
    case 'date':
        response = diary.date(args[1]);
        break;
    case 'today':
        response = diary.today(args[1]);
        break;
    case 'search':
        response = diary.search(args[1]);
        break;

    default:
        response = `Invalid input`
        break;
}

console.log(response);

diary.save(__dirname+'/data.json');