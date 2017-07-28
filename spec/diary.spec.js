describe("Diary", () => {

	describe("diary loading", () => {
		beforeEach(() => {
			//create diary
		})

		it("should load the diary from a file", () => {
			const loadedData = diary.load("../diaries/testDiary")
		});


		afterEach(() => {
			//delete diary
		})

	});

	describe("diary entry creation" () => {
		beforeEach(() => {
			//create diary
		})

		it("should save an entry by id", () => {

		});

		it("should save all entries as strings", () => {

		});

		it("should save each by unique ID", () => {

		})

		it("should save an entry by tags if it has any", () => {

		});

		it("should create new tags if they don't already exist", () => {

		});

		it("should save an entry by date", () => {

		});

		it("should save an entry by a user-specified date", () => {

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
});
