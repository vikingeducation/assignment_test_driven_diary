const dummyData = {
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

describe("Diary", () => {

	describe("diary loading", () => {
		beforeEach(() => {
			//create diary
		})

		it("should load the diary from a file", () => {
			let loadedData = diary.load("../diaries/testDiary");

			expect(loadedData).toEqual(dummyData);
		});


		afterEach(() => {
			//delete diary
		})

	});

	describe("diary entry creation" () => {
		beforeEach(() => {
			//create diary
		})

		it("should create an entry by id", () => {
			let entry = diary.entry("I luv uuuuuu #brad")

			let newEntry = {entry: "I luv uuuuuu #brad",
															tags: ["brad"],
															id: "4"}
			expect(entry.entry).toEqual(newEntry.entry)
			expect(entry.tags).toEqual(newEntry.tags)
			expect(entry.date).toMatch(/^\d\d:\d\d:\d\d\d\d-\d\d:\d\d/)
		});

		it("should create each by unique ID", () => {

		})

		it("should create an entry by tags if it has any", () => {

		});

		it("should create all entries as strings", () => {

		});

		it("should create new tags if they don't already exist", () => {

		});

		it("should create an entry by date", () => {

		});

		it("should create an entry by a user-specified date", () => {

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
