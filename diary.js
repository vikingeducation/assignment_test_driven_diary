const diaryFile = "./diaryfile";
const fs = require("fs");

class Diary {
	constructor() {
		this.diary = [];
	}

	entry(str) {
		var entry = {};
		entry.body = str;
		entry.date = Date();
		this.diary.push(entry);
		return this.diary;
	}

	entries() {
		//var diaryFileEntries = fs.readFileSync(diaryFile);
		this.diary.forEach(diaryEntry => {
			console.log("date: ", diaryEntry.date);
			console.log("entry: ", diaryEntry.body);
			console.log("");
		});
		//console.log(`Older entries ${diaryFile}`);

		return this.diary;
	}

	tags() {
		//var diaryFileEntries = fs.readFileSync(diaryFile);
		var taglist = [];
		this.diary.forEach(diaryEntry => {
			var regex = /#\S+[a-z]/g;
			taglist.push(diaryEntry.body.match(regex));
		});
		//taglist.push(diaryFileEntries.match(regex))
		return taglist;
	}

	entriesWithTag(tag) {
		var taggedEntries = [];
		this.diary.forEach(diaryEntry => {
			var regex = new RegExp(`#${tag}`, "g");
			if (regex.test(diaryEntry.body)) {
				taggedEntries.push(diaryEntry);
			}
		});
		return taggedEntries;
	}

	today() {
		//return diary entries from today
	}
}

module.exports = Diary;
