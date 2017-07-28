const fs = require("fs");

describe("Diary", () => {

	describe("diary loading", () => {

		it("should load the diary from a file", () => {
			let loadedDiary = diary.load("../diaries/testDiary");

			expect(loadedDiary).toEqual(currentDiary);
		});

	});

	describe("diary entry creation" () => {
		beforeEach(() => {
			const currentDiary = {
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
					/^\d{10}/: ["4"]
				}
			}
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
			expect(entry.date).toMatch(/^\d{10}/)
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
			expect(entry.date)toEqual("1499977800");
		});

		it("should accept date parameter in form of 'mm/dd/yyyy' ", () => {
			let entry = diary.entry("omg im like so tired", "07/13/2017")
			expect(entry.date)toEqual("1499904000");
		});

		it("should throw error for any non-accepted date format", () => {

			expect(diary.entry("omg im like so tired", "0712017"))toThrow("Invalid Date");
		});

		it("should insert a new entry even if content and date are the same", () => {
			let currentDiary = diary.insertEntry(diary.entry("omg im like so tired", "07/13/2017-20:30"));
			let updatedDiary = diary.insertEntry(diary.entry("omg im like so tired", "07/13/2017-20:30"));
			expect(updatedDiary.dates["1499977800"]).toEqual(["5", "6"])
		});

		it("should not save a blank entry", () => {
			expect(diary.entry("")).toThrow("Invalid entry.");
		});

		it("should not save an entry with only white space", () => {
			expect(diary.entry("\t\t\t\t   \n")).toThrow("Invalid entry.");
		})

	});

	describe("diary searching", () => {
		beforeEach(() => {
			const currentDiary = {
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
		});

		it("should return a list of all entries", () => {
			let retrievedEntries = diary.entries()
			const entries = ["lolol Brad #heartemoji #brad", "8) #brad", "I'm at your windooooooooooow #juststalkerthings #brad"];
			expect(retrievedEntries).toEqual(entries);
		});

		it("should notify user if no entries exist in diary", () => {
			const emptyDiary = {};
			expect(diary.entries(emptyDiary)).toThrow("There are no entries.");
		})

		it("should return all entries with a certain tag", () => {
			let retrievedEntries = diary.entriesWithTag("brad");
			const entries = ["lolol Brad #heartemoji #brad", "8) #brad", "I'm at your windooooooooooow #juststalkerthings #brad"];
			expect(retrievedEntries).toEqual(entries)
		});

		it("should notify user if no entries exist by tag", () => {
			expect(diary.entriesWithTag("yolo")).toThrow("There are no entries.")
		})

		it("should return all existing tags", () => {
			let entries = diary.tags();
			let result = ["heartemoji", "brad", "juststalkerthings"]
			expect(entries).toEqual(result)
		});

		it("should notify user if no tags exist", () => {
			expect(diary.tags()).toThrow("There are no tags.")
		})

		it("should return all entries from the current day", () => {
			let newEntry = diary.entry("i'm bored lol");
			let entries = diary.today();
			expect(entries).toEqual(["i'm bored lol"]);
		});

		it("should notify user if no entries exist from current date", () => {
			expect(diary.today()).toThrow("There are no entries.");
		})

		it("should return all entries from a given date", () => {
			let entries = diary.date("07/28/2017")
			expect(entries).toEqual(["lolol Brad #heartemoji #brad", "8) #brad", "I'm at your windooooooooooow #juststalkerthings #brad"]);
		});

		it("should notify user if no entries exist for given date", () => {
			expect(diary.date("7/26/2017")).toThrow("There are no entries.")
		})

		it("should return all entries containing a user-specified search string", () => {
			let entries = diary.search("Brad")
			expect(entries).toEqual(["lolol Brad #heartemoji #brad", "8) #brad", "I'm at your windooooooooooow #juststalkerthings #brad"])
		});
	});

	describe("diary saving", () => {
		it("saves the diary object to a json file", () => {
			diary.save("./diaries/testDiary.json").then(() => {
				let result = fs.readFileSync("./diaries/testDiary.json");
				expect(result).toEqual(currentDiary)
			})
		});
	});
});
