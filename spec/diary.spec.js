const Diary = require('../lib/diary');

describe('diary', () => {
	it('exists and is a constructor', () => {
		expect(() => {
			return new Diary();
		}).not.toThrow();
	});

	const diary = new Diary();
	describe('entry method', () => {
		beforeEach(() => {
			diary.diaryEntries = [];
		});
		xit('exists and is a function', () => {
			expect(Diary.prototype.entry && isFunction(Diary.prototype.entry)).toBe(
				true
			);
		});

		xit('will not accept an empty string', () => {
			expect(diary.entry('') && diary.entry(' ')).toBe(false);
		});

		xit('can successfully add entries', () => {
			let msg = 'Brad is everything to me.';
			diary.entry(msg);
			expect(diary.diaryEntries.some(entry => entry.msg === msg)).toBe(true);
		});

		xit('creates an entry without an undefined gmtCreated value', () => {
			let msg = 'Brad is everything to me.';
			diary.entry(msg);
			expect(
				diary.diaryEntries.some(entry => {
					return entry.msg === msg && entry.gmtCreated !== undefined;
				})
			).toBe(true);
		});

		xit('can accept an optional date argument', () => {
			let msg = 'Brad. Brad. Brad. Brad. Brad.';
			let gmtCreated = new Date().getTime();
			diary.entry(msg, gmtCreated);
			expect(
				diary.diaryEntries.some(entry => {
					return entry.msg === msg && entry.gmtCreated === gmtCreated;
				})
			).toBe(true);
		});

		xit('creates an entry that guarantees date is a number', () => {
			let msg = 'Brad is everything to me.';

			diary.entry(msg, 'This is not a number');
			expect(
				diary.diaryEntries.some(entry => {
					return entry.msg === msg && Number.isInteger(entry.gmtCreated);
				})
			).toBe(true);
		});

		it('detects if the message has a hash tag and parses it correctly', () => {
			let msg = "I'm standing outside Brad's house #yolo";
			diary.entry(msg);
			// diary.entry("I'm at Brad's window #yolo");
			// diary.entry('OMG. What have I done? #sorrynotsorry');
			expect(
				diary.diaryEntries.some(entry => {
					return (
						entry.msg === msg && entry.tag && typeof entry.tag === 'string'
					);
				})
			).toBe(true);
		});

		afterEach(() => {
			diary.diaryEntries = [];
		});
	});

	describe('entries method', () => {
		beforeEach(() => {
			diary.diaryEntries = [];
		});

		xit('should return a list of all entries', () => {
			diary.entry('An entry one');
			diary.entry('An entry two');
			diary.entry('An entry three');
			diary.entry('An entry four');
			diary.entry('An entry five');
			expect(
				Array.isArray(diary.diaryEntries) && diary.diaryEntries.length === 5
			).toBe(true);
		});

		afterEach(() => {
			diary.diaryEntries = [];
		});
	});

	describe('tags method', () => {});
});

function isFunction(x) {
	return Object.prototype.toString.call(x) == '[object Function]';
}

// diary.entries();
// // .entries should return a list of all entries.
//
// diary.entry("I'm standing outside Brad's house #yolo");
// diary.entry("I'm at Brad's window #yolo");
// diary.entry("OMG. What have I done? #sorrynotsorry");
//
// diary.tags();
// // .tags this should return ['yolo', 'sorrynotsorry']
//
// diary.entriesWithTag("yolo");
// // .entriesWithTag return a list of every entry with the yolo tag
//
// diary.today();
// // .today returns a list of all entries written today
//
// diary.date(Date.parse("10/10/10"));
// // .date returns a list of all entries written on the given date
//
// diary.entry("Today, Brad accidentally touched my hand in the hallway.");
// diary.entry("Brad is a dreamboat.");
// diary.entry("My dad is sooo annoying.");
//
// diary.search("Brad");
// // .search should return a list of all notes with the given string.
//
// diary.save("./.diary");
// // .save should persist the current state of the diary the given file.
//
// diary.load("./.diary");
// // .load should load the the diary object with the entries stored i
