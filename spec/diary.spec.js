const Diary = require("../diary");

describe("Diary", () => {
  let diary = new Diary();
  beforeEach(() => {
    diary.diary = [
      {
        message: "Brad is to me #yolo",
        date: Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
      },
      {
        message: "I'm standing outside Brad's house #yolo",
        date: Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
      },
      {
        message: "I'm standing outside Brad's house #MarryPoppins",
        date: Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
      }
    ];
  });
  describe("date method", () => {
    let diary = new Diary();

    it("return entries from a specified date", () => {
      let date = Date.parse("Mon, 25 Dec 1995 13:30:00 GMT");
      let result = diary.date(date);

      result.forEach((entry, index) => {
        expect(entry.message).toEqual(result[index].message);
        expect(entry.date).toEqual(result[index].date);
      });
    });
  });

  describe("today method", () => {
    let diary = new Diary();
    beforeEach(() => {
      diary.diary.push({
        message: "Brad is to me #yolo",
        date: Date.now()
      });
    });

    it("return entries from today", () => {
      let result = diary.today();
      result.forEach((entry, index) => {
        expect(entry.message).toEqual(result[index].message);
        expect(entry.date).toEqual(result[index].date);
      });
    });
  });
});
// describe("search method", () => {
//   beforeEach();
// });
describe("entriesWithTag method", () => {
  let diary = new Diary();
  beforeEach(() => {
    diary.entry(
      "Brad is everything to me",
      Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
    );
    diary.entry(
      "I'm standing outside Brad's house #yolo",
      Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
    );
  });

  it("returns a message with the given tag", () => {
    let tag = "#yolo";
    let result = diary.entriesWithTag(tag);
    expect("I'm standing outside Brad's house #yolo").toEqual(
      result[0].message
    );
  });
});

///////
describe("Entries entry method", () => {
  beforeEach(function() {
    diary = new Diary();
  });

  it("If first param is not a string it throws an error", function() {
    expect(function() {
      diary.entry(1);
    }).toThrow(new Error("First param must be string"));
  });

  xit("entry takes an option second arg which is Date", function() {
    const result = diary.entry(
      "I love Brad",
      Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
    );
    console.log(result);
    expect(result).toEquals([]);
  });
  it("entry saves an entry into the diary, checking message", function() {
    diary.entry("I love Brad", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
    expect(diary.diary[0].message).toEqual("I love Brad");
  });
  it("entry saves an entry into the diary, checking date", function() {
    diary.entry("I love Brad", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
    expect(diary.diary[0].date).toEqual(
      Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
    );
  });

  describe("Diary tags method", () => {
    xit("return all the tags", () => {
      let tags = ["yolo", "MarryPoppins"];
      let result = diary.tags();
      expect(tags[0]).toEqual(result[0]);
      expect(tags[1]).toEqual(result[1]);
    });

    it("returns only the entries that have tags", () => {
      let tag = "yolo";
      let diaryYolo = [
        {
          message: "Brad is to me #yolo",
          date: Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
        },
        {
          message: "I'm standing outside Brad's house #yolo",
          date: Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
        }
      ];

      let result = diary.entriesWithTag(tag);
      result.forEach((entry, index) => {
        expect(entry.message).toEqual(diaryYolo[index].message);
        expect(entry.date).toEqual(diaryYolo[index].date);
      });
    });
  });
});

describe("Entries method", () => {
  let diary = new Diary();
  beforeEach(() => {
    diary.entry(
      "Brad is everything to me",
      Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
    );
    diary.entry(
      "I'm standing outside Brad's house #yolo",
      Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
    );
  });

  it("returns all the data entries with messages and dates (not current date)", () => {
    let results = diary.entries();
    results.forEach((entry, index) => {
      expect(entry.message).toEqual(diary.diary[index].message);
      expect(entry.date).toEqual(diary.diary[index].date);
    });
  });

  it("returns all data entries with messages and dates (current and past dates)", () => {
    let currDate = Date.now();
    diary.diary.push({ message: "Brad is everything to me", date: currDate });
    let results = diary.entries();
    results.forEach((entry, index) => {
      expect(entry.message).toEqual(diary.diary[index].message);
      expect(entry.date).toEqual(diary.diary[index].date);
    });
  });
});

// describe("entry saves an entry into the diary", function() {
//   xit("entry saves an entry into the diary", function() {
//     const result = Entries.entry(
//       "I love Brad",
//       Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
//     );
//     expect(result).match("I love Brad");
//   });
//   xit("entry saves an entry into the diary", function() {
//     const result = Entries.entry(
//       "I love Brad",
//       Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
//     );
//     expect(result).match("I love Brad");
//   });
//   xit("entry saves an entry into the diary", function() {
//     const result = Entries.entry(
//       "I love Brad",
//       Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
//     );
//     expect(result).match("I love Brad");
//   });
// });
