//

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
}

module.exports = Diary;
