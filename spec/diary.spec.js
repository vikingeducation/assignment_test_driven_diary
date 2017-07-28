const dummyDiary = {
	entries: {
		1: "lolol Brad #heartemoji #brad",
		2: "8) #brad",
		3: "I'm at your windooooooooooow #juststalkerthings #brad"
	},

	tags: {
		heartemoji: ["1"],
		brad: ["1", "2", "3"],
		juststalkerthings: ["3"]
	},

	dates: {
		1501272599: ["1"],
		1501272665: ["2"],
		1501272682: ["3"]
	}
}

const newEntry = {entry: "I luv uuuuuu #brad",
												tags: ["brad"],
												id: "4"}

const updatedDummyDiary = {
	entries: {
		1: "lolol Brad #heartemoji #brad",
		2: "8) #brad",
		3: "I'm at your windooooooooooow #juststalkerthings #brad",
		4: "I luv uuuuuu #brad"
	},

	tags: {
		heartemoji: ["1"],
		brad: ["1", "2", "3", "4"],
		juststalkerthings: ["3"]
	},

	dates: {
		1501272599: ["1"],
		1501272665: ["2"],
		1501272682: ["3"],
		/^\d{2}:\d{2}:[\d]{4}-\d{2}:\d{2}/: ["4"]
	}
}

describe("Diary", () => {

	describe("diary loading", () => {
		beforeEach(() => {
			//create diary
		})

		it("should load the diary from a file", () => {
			let loadedDiary = diary.load("../diaries/testDiary");

			expect(loadedDiary).toEqual(dummyDiary);
		});


		afterEach(() => {
			let diary = dummyDiary
		})

	});

	describe("diary entry creation" () => {
		beforeEach(() => {
			let entry = diary.entry("I luv uuuuuu #brad")
			let updatedDiary = diary.insertEntry(entry);
		})

		it("should parse message into the usable object correctly", () => {
			expect(entry.entry).toEqual(newEntry.entry)
		});

		it("should parse tags into the usable object correctly", () => {
			expect(entry.tags).toEqual(newEntry.tags)
		});

		it("should parse date into the usable object correctly", () => {
			expect(entry.date).toMatch(/^\d{2}:\d{2}:[\d]{4}-\d{2}:\d{2}/)
		});

		it("should parse ID into the usable object correctly", () => {
			expect(entry.id).toEqual(newEntry.id)
		});

		it("should insert message into the diary object correctly", () => {
			expect(updatedDiary.entries).toEqual(updatedDummyDiary.entries)
		});

		it("should insert tags into the diary object correctly", () => {
			expect(updatedDiary.tags).toEqual(updatedDummyDiary.tags)
		});

		it("should insert date into the diary object correctly", () => {
			expect(updatedDiary.date).toEqual(updatedDummyDiary.date)
		});

		it("should create each by unique ID", () => {
			let entryCopy = diary.entry("I luv uuuuuu #brad");
			var  secondEntryUniqueId = "5";
			expect(entryCopy.id).toEqual(secondEntryUniqueId);
		})

		it("should create all entries as strings", () => {
			expect(typeof entry.entry).toEqual("string");
		});

		it("should create new tags if they don't already exist", () => {
				let updatedTagDiary = diary.insertEntry(diary.entry("ugh! school tomorrow #ihateschool"));
				expect(updatedTagDiary.tags.ihateschool).toBe(true);
		});

		it("should create an entry by a user-specified date", () => {
			let entry = diary.entry("omg im like so tired", "07/13/2017-20:30")
			expect(entry.date)toEqual("07/13/2017-20:30");
		});

		it("should accept date parameter in form of 'mm/dd/yyyy-hh:mm' ", () => {

		});

		it("should accept date parameter in form of 'mm/dd/yyyy' ", () => {

		});

		it("should throw error for any non-accepted date format", () => {

		})

		it("should save entry by date in unix time format", () => {

		})

		it("should create a new entry even if content and date are the same", () => {

		});

		it("should not save a blank entry", () => {

		});

		it("should not save an entry with only white space", () => {

		})

		afterEach(() => {
			//delete diary & contents
		})
	});

	describe("diary searching", () => {
		beforeEach(() => {
			//create a dairy
			// write some entries to a diary
		});

		it("should return a list of all entries", () => {

		});

		it("should notify user if no entries exist in diary", () => {

		})

		it("should return all entries with a certain tag", () => {

		});

		it("should notify user if no entries exist by tag", () => {

		})

		it("should return all existing tags", () => {

		});

		it("should notify user if no tags exist", () => {

		})

		it("should return all entries from the current day", () => {

		});

		it("should notify user if no entries exist from current date", () => {

		})

		it("should return all entries from a given date", () => {

		});

		it("should notify user if no entries exist for given date", () => {

		})

		it("should reurn all entries containing a user-specified search string", () => {

		});

		afterEach(() => {
			//delete dairy & contents
		})
	});

	describe("diary saving", () => {
		it("saves the diary object to a json file", () => {

		});
	});
});
