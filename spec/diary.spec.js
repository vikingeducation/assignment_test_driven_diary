const Diary = require("../diary");

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

describe("Tags method", () => {
  let diary = new Diary();
  beforeEach(() => {
    diary.diary = [
      {
        message: "Brad is to me #yolo",
        date: Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
      },
      {
        message: "I'm standing outside Brad's house #MarryPoppins",
        date: Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
      }
    ];
  });

  it("return all the tags", () => {
    let tags = ["yolo", "MarryPoppins"];
    let result = diary.tags();
    expect(tags[0]).toEqual(result[0]);
    expect(tags[1]).toEqual(result[1]);
  });
});

//
// //diary.tags();
// xit("", function() {
//   const result = Entries.entry(
//     "I love Brad",
//     Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
//   );
//   expect(result).toBeDefined();
// });
// ///???
//
// //?????????
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
//
// describe("Anagrams", () => {
//   let anagrams;
//
//   beforeEach(function() {
//     anagrams = new Anagrams(["coat", "seats", "easts", "sates", "dog"]);
//   });
//
//   describe(".find", () => {
//     it("returns the anagrams for the word taco", function() {
//       const results = anagrams.find("taco");
//       expect(results).toEqual(["coat"]);
//     });
//
//     it("returns the anagrams for the given word", function() {
//       const results = anagrams.find("asset");
//       expect(results).toEqual(["easts", "sates", "seats"]);
//     });
//
//     it("returns nothing when no anagrams exist", function() {
//       const results = anagrams.find("zxzxzxzx");
//       expect(results).toEqual([]);
//     });
//
//     it("returns the anagrams for the given WoRd", function() {
//       const results = anagrams.find("TaCo");
//       expect(results).toEqual(["coat"]);
//     });
//   });
// });
