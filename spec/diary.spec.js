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
    diary.entry("Brad is my soul #beMine #dope");
    diary.entry("Brad is life #beMine");
    let answer = ["#yolo", "#beMine", "#dope"];
    let result = diary.tags();
    expect(result).toEqual(answer);
  });
  xit("returns an array", () => {
    let result = diary.tags();
    expect(Array.isArray(result)).toBe(true);
  });
});
describe("Top:", () => {
  let now = Date.now();
  let messages = [
    {
      message: "Brad, braaaad, bread. Brad, the sandwich of the soul.",
      date: new Date("Mon, 25 Dec 1995 13:30:00 GMT"),
      tags: []
    },
    {
      message:
        "Smelling Brad's hair from the next booth at Hardees! #toGoodtoBeTrue",
      date: now,
      tags: ["#toGoodtoBeTrue"]
    },
    {
      message: "Brad's mom said I smelled! #toGoodtoBeTrue",
      date: now,
      tags: ["#toGoodtoBeTrue"]
    },
    {
      message: "Bodacious Rad Alternate Dimension #BRAD",
      date: now,
      tags: "#BRAD"
    }
  ];
  beforeEach(() => {
    diary = new Diary();
    messages.forEach(entry => {
      diary.entry(entry.message, entry.date);
    });
  });

  describe("entries with tag method:", () => {
    it("returns the entries with a given tag", () => {
      let result = diary.entriesWithTag("#BRAD");
      let answer = "Bodacious Rad Alternate Dimension #BRAD";
      expect(result[0].message).toBe(answer);
    });
    it("returns all the entries with a given tag", () => {
      let result = diary.entriesWithTag("#toGoodtoBeTrue");
      let answerMessages = [
        "Smelling Brad's hair from the next booth at Hardees! #toGoodtoBeTrue",
        "Brad's mom said I smelled! #toGoodtoBeTrue"
      ];
      let resultMessages = [result[0].message, result[1].message];
      expect(resultMessages).toEqual(answerMessages);
    });
  });
  describe("Date method:", () => {
    it("grabs all the entries with a specified date", () => {
      let result = diary.date(now);
      expect(result.length).toEqual(3);
    });
  });
  describe("Today method:", () => {
    it("grabs all the entries from today", () => {
      let result = diary.date(now);
      expect(result.length).toEqual(3);
    });
  });
  describe("Search method:", () => {
    it("returns all entries with messages that contain a given text", () => {
      let result = diary.search("hair");
      let answer = messages[1].message;
      expect(result[0].message).toBe(answer);
    });
  });
  describe("Save method", () => {
    xit("saves a the current diary to a given file", () => {
      const fs = require("fs");
      let json = JSON.stringify(messages);
      diary.save("./diary.txt");
      let json_answer = JSON.parse(fs.readFileSync("./diary.txt", "utf8"));
      expect(json_answer).toEqual(json);
    });
  });
  describe("Load method", () => {
    xit("loads a file as the current diary", () => {
      expect();
    });
  });
});
