const Diary = require("./diary");
var diary = new Diary();
var response;

console.log(process.argv[3]);

diary.load();

switch (process.argv[3]) {
	case "entry":
		var wholeDiary = diary.entry(process.argv[4]);
		console.log(wholeDiary);
		break;
	case "entries":
		var wholeDiary = diary.entries();
		console.log(wholeDiary);
		break;
	case "tags":
		console.log(diary.tags());
		break;
	case "entriesWithTag":
		console.log(diary.entriesWithTag(process.argv[4]));
		break;
	case "today":
		console.log(diary.today());
		break;
	case "search":
		console.log(diary.search(process.argv[4]));
		break;
	case "save":
		diary.save();
		break;
	case "load":
		diary.load();
		console.log("diary loaded into memory");
	default:
		console.log("invalid response");
		break;
}

diary.save();
