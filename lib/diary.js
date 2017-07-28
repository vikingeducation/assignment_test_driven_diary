//on command line input create diary entry
// >> this entry can have a # for reference later

//Methods
//entry : string, string
//entires: none
//tags : none
//entries with tag: string
//today
//date: number
//search: string
//save: string
//load: string
//methods

//diary entry takes 2 parameters: second is optional
//

class Diary {
	constructor() {
		this._entries = [];
		this._tags = {};
	}

	// Add an entry to the entries array.
	entry(msg, gmt) {
		msg = msg.trim();
		if (!msg.length) return false;

		// Make sure our date is valid and an integer.
		if (gmt === undefined || !Number.isInteger(gmt)) {
			gmt = new Date();
		} else {
		}

		// Parse out any hash tags.
		let newEntry,
			hashTags = msg.match(/(#\w+)+/gi);

		if (hashTags) {
			newEntry = new Entry(msg, gmt, hashTags);
			hashTags.forEach(hashTag => {
				if (!this._tags[hashTag]) {
					this._tags[hashTag] = [];
				}
				this._tags[hashTag].push(newEntry);
			});
		} else {
			newEntry = new Entry(msg, gmt, []);
		}

		// Add to list of entries.
		this._entries.push(newEntry);
	}

	entriesWithTag(tag) {
		if (tag[0] !== '#') tag = '#'.concat(tag);
		return this._tags[tag];
	}

	get length() {
		return this._entries.length;
	}

	get entries() {
		return this._entries;
	}
	set entries(val) {
		this._entries = val;
	}
	get tags() {
		return Object.keys(this._tags);
	}
	set tags(val) {
		this._tags = val;
	}
	get today() {
		return this._entries.filter(entry => new D());
	}
}

class Entry {
	constructor(msg, gmtCreated, tags) {
		this.msg = msg;
		this.gmtCreated = gmtCreated;
		this.tags = tags;
	}
}

module.exports = Diary;
