describe("Entries entry method", () => {
  let diary = {};
  beforeEach(function() {
    //if setup
    //data structure thoughts
    // diary = [{}, {];
    diary = [];
  });
  afterEach(function() {
    //
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
    expect(result).toBeDefined();
  });
  xit("entry saves an entry into the diary, checking message", function() {
    diary.entry("I love Brad", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
    expect(diary[0][message]).equalsTo("I love Brad");
  });
  xit("entry saves an entry into the diary, checking date", function() {
    diary.entry("I love Brad", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
    expect(diary[0][date]).equalsTo(
      Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
    );
  });
});
describe("Entries tag method", () => {
  let diary = {};
  beforeEach(function() {
    //if setup
    diary = {};
  });
  xit("tags grabs the messages with tags", function() {});
  afterEach(function() {
    //
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
