const Diary = require("../diary");

let diary;

describe("Diary entry method", () => {
  beforeEach(() => {
    diary = new Diary();
  });

  it("creates a new diary entry", () => {
    diary.entry("Brad <3");
    let result = diary.getEntry(0);
    expect("Brad <3").toEqual(result.message);
  });
  it("creates a new diary entry with a Date if not given", () => {
    diary.entry("Brad <3");
    let result = diary.getEntry(0);
    expect(result.date).toBeDefined();
  });
  it("it prefilters tags, when given a tag", () => {
    diary.entry("Brad. Brad. Brad. #daBest");
    let result = diary.getEntry(0);
    expect(result.tags[0]).toEqual("#daBest");
  });
  it("it prefilters tags", () => {
    diary.entry("Brad. Brad. #<3 Brad. #daBest");
    let result = diary.getEntry(0);
    let tags = ["#<3", "#daBest"];
    let equivalent = checkArrays(tags, result.tags);
    expect(equivalent).toEqual(true);
  });
  //later regex test
  xit("it prefilters tags", () => {
    diary.entry("Brad. Brad.#<3 Brad. #daBest");
    let result = diary.getEntry(0);
    let tags = ["#<3", "#daBest"];
    let equivalent = checkArrays(tags, result.tags);
    expect(equivalent).toEqual(true);
  });
});
//[],[]=>Bool
function checkArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
let messages = [
  {
    message: "Brad is to me #yolo",
    date: new Date("Mon, 25 Dec 1995 13:30:00 GMT")
  },
  {
    message: "I'm standing outside Brad's house #yolo",
    date: new Date("Mon, 25 Dec 1995 13:30:00 GMT")
  },
  {
    message: "I'm standing outside Brad's house #MarryPoppins",
    date: new Date("Mon, 25 Dec 1995 13:30:00 GMT")
  }
];
describe("entries method", () => {
  beforeEach(() => {
    diary = new Diary();
    messages.forEach(entry => {
      diary.entry(entry.message, entry.date);
    });
  });
  let messages = [
    {
      message: "Brad is to me #yolo",
      date: new Date("Mon, 25 Dec 1995 13:30:00 GMT"),
      tags: "#yolo"
    },
    {
      message: "I'm standing outside Brad's house #yolo",
      date: new Date("Mon, 25 Dec 1995 13:30:00 GMT"),
      tags: "#yolo"
    },
    {
      message: "I'm standing outside Brad's house #MarryPoppins",
      date: new Date("Mon, 25 Dec 1995 13:30:00 GMT"),
      tags: "#MarryPoppins"
    }
  ];
  it("returns an array", () => {
    let result = Array.isArray(diary.entries());
    expect(result).toBe(true);
  });
  it("returns an array of entries", () => {
    let result = diary.entries();
    expect(result[0].message).toBe("Brad is to me #yolo");
    expect(result[0].tags[0]).toBe("#yolo");
  });
});
describe("entries tags", () => {
  beforeEach(() => {
    diary = new Diary();
    messages.forEach(entry => {
      diary.entry(entry.message, entry.date);
    });
  });
  it("returns an array", () => {
    let result = diary.tags();
    expect(Array.isArray(result)).toBe(true);
  });
  it("correctly parses multiple tags", () => {
    diary = new Diary();
    diary.entry("#yolo");
    //diary.entry("Incorrect Entry#");  //create a separate test for this
    diary.entry("Brad is my soul #beMine #dope");
    diary.entry("Brad is life #beMine");
    let answer = ["#yolo", "#beMine", "#dope"];
    let result = diary.tags();
    expect(result.values()).toBe(answer.keys());
  });
  xit("returns an array", () => {
    let result = diary.tags();
    expect(Array.isArray(result)).toBe(true);
  });
});
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
