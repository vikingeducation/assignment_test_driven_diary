const fs = require("fs");
const diary = require("../diary");

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
};

let entry;
let updatedEntry;

describe("Diary", () => {
  describe("diary loading", () => {
    it("should load the diary from a file", () => {
      let loadedDiary = diary.load("./diaries/testDiary");

      expect(loadedDiary).toEqual(currentDiary);
    });
  });

  describe("diary entry creation", () => {
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
      };

      const newEntry = {
        entry: "I luv uuuuuu #brad",
        tags: ["brad"],
        id: "4",
        date: /^\d{10}$/
      };

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
          "/^d{10}/": ["4"]
        }
      };
      entry = diary.entry("I luv uuuuuu #brad");
      pdatedDiary = diary.insertEntry(entry);
    });

    it("should parse message into the usable object correctly", () => {
      expect(entry.entry).toEqual(newEntry.entry);
    });

    xit("should parse tags into the usable object correctly", () => {
      expect(entry.tags).toEqual(newEntry.tags);
    });

    xit("should parse date into the usable object correctly", () => {
      expect(entry.date).toMatch(/^\d{10}/);
    });

    xit("should parse ID into the usable object correctly", () => {
      expect(entry.id).toEqual(newEntry.id);
    });

    xit("should insert message into the diary object correctly", () => {
      expect(updatedDiary.entries).toEqual(updatedDummyDiary.entries);
    });

    xit("should insert tags into the diary object correctly", () => {
      expect(updatedDiary.tags).toEqual(updatedDummyDiary.tags);
    });

    xit("should insert date into the diary object correctly", () => {
      expect(updatedDiary.date).toEqual(updatedDummyDiary.date);
    });

    xit("should create each by unique ID", () => {
      let entryCopy = diary.entry("I luv uuuuuu #brad");
      var secondEntryUniqueId = "5";
      expect(entryCopy.id).toEqual(secondEntryUniqueId);
    });

    xit("should create all entries as strings", () => {
      expect(typeof entry.entry).toEqual("string");
    });

    xit("should create new tags if they don't already exist", () => {
      let updatedTagDiary = diary.insertEntry(
        diary.entry("ugh! school tomorrow #ihateschool")
      );
      expect(updatedTagDiary.tags.ihateschool).toBe(true);
    });

    xit("should create an entry by a user-specified date", () => {
      let entry = diary.entry("omg im like so tired", "07/13/2017-20:30");
      expect(entry.date).toEqual("1499977800");
    });

    xit("should accept date parameter in form of 'mm/dd/yyyy' ", () => {
      let entry = diary.entry("omg im like so tired", "07/13/2017");
      expect(entry.date).toEqual("1499904000");
    });

    xit("should throw error for any non-accepted date format", () => {
      expect(diary.entry("omg im like so tired", "0712017")).toThrow(
        "Invalid Date"
      );
    });

    xit(
      "should insert a new entry even if content and date are the same",
      () => {
        let currentDiary = diary.insertEntry(
          diary.entry("omg im like so tired", "07/13/2017-20:30")
        );
        let updatedDiary = diary.insertEntry(
          diary.entry("omg im like so tired", "07/13/2017-20:30")
        );
        expect(updatedDiary.dates["1499977800"]).toEqual(["5", "6"]);
      }
    );

    xit("should not save a blank entry", () => {
      expect(diary.entry("")).toThrow("Invalid entry.");
    });

    xit("should not save an entry with only white space", () => {
      expect(diary.entry("\t\t\t\t   \n")).toThrow("Invalid entry.");
    });
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
      };
    });

    xit("should return a list of all entries", () => {
      let retrievedEntries = diary.entries();
      const entries = [
        "lolol Brad #heartemoji #brad",
        "8) #brad",
        "I'm at your windooooooooooow #juststalkerthings #brad"
      ];
      expect(retrievedEntries).toEqual(entries);
    });

    xit("should notify user if no entries exist in diary", () => {
      const emptyDiary = {};
      expect(diary.entries(emptyDiary)).toThrow("There are no entries.");
    });

    xit("should return all entries with a certain tag", () => {
      let retrievedEntries = diary.entriesWithTag("brad");
      const entries = [
        "lolol Brad #heartemoji #brad",
        "8) #brad",
        "I'm at your windooooooooooow #juststalkerthings #brad"
      ];
      expect(retrievedEntries).toEqual(entries);
    });

    xit("should notify user if no entries exist by tag", () => {
      expect(diary.entriesWithTag("yolo")).toThrow("There are no entries.");
    });

    xit("should return all existing tags", () => {
      let entries = diary.tags();
      let result = ["heartemoji", "brad", "juststalkerthings"];
      expect(entries).toEqual(result);
    });

    xit("should notify user if no tags exist", () => {
      expect(diary.tags()).toThrow("There are no tags.");
    });

    xit("should return all entries from the current day", () => {
      let newEntry = diary.entry("i'm bored lol");
      let entries = diary.today();
      expect(entries).toEqual(["i'm bored lol"]);
    });

    xit("should notify user if no entries exist from current date", () => {
      expect(diary.today()).toThrow("There are no entries.");
    });

    xit("should return all entries from a given date", () => {
      let entries = diary.date("07/28/2017");
      expect(entries).toEqual([
        "lolol Brad #heartemoji #brad",
        "8) #brad",
        "I'm at your windooooooooooow #juststalkerthings #brad"
      ]);
    });

    xit("should notify user if no entries exist for given date", () => {
      expect(diary.date("7/26/2017")).toThrow("There are no entries.");
    });

    xit(
      "should return all entries containing a user-specified search string",
      () => {
        let entries = diary.search("Brad");
        expect(entries).toEqual([
          "lolol Brad #heartemoji #brad",
          "8) #brad",
          "I'm at your windooooooooooow #juststalkerthings #brad"
        ]);
      }
    );
  });

  describe("diary saving", () => {
    xit("saves the diary object to a json file", () => {
      diary.save("./diaries/testDiary.json").then(() => {
        let result = fs.readFileSync("./diaries/testDiary.json");
        expect(result).toEqual(currentDiary);
      });
    });
  });
});
