const Diary = require('./diary.js');

describe("diary", () => {

  let diary;
  beforeEach(() => {
    diary = new Diary();
  })

  it("makes a new entry", () => {
    expect(diary.entries().length).toEqual(0);
    diary.entry("Braaad");
    expect(diary.entries().length).toEqual(1);
  })

  it("makes a new tag", () => {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window #yolo");
    expect(diary.tags()).toEqual(['yolo']);
  })

  it("outputs all entries with specific tag", () => {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window #yolo");

    expect(diary.entriesWithTag("yolo")).toEqual(
      ["I'm standing outside Brad's house #yolo",
        "I'm at Brad's window #yolo"
      ]
    )

  })

  it("Outputs all entries written today", () => {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window");

    expect(diary.today()).toEqual(
      ["I'm standing outside Brad's house #yolo",
        "I'm at Brad's window"
      ]
    )
  })

  it("Outputs all entries written on the given date", () => {
    diary.entry("I'm standing outside Brad's house #yolo", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));

    expect(diary.date(Date.parse("12/25/95"))).toEqual(
      ["I'm standing outside Brad's house #yolo"]
    )
  })

  it("returns a list of entries with the given search string", () => {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window");
    diary.entry("My dad is so annoying");
    diary.entry("Vlad has too many tattoos");
    expect(diary.search("Brad")).toEqual(["I'm standing outside Brad's house #yolo", "I'm at Brad's window"])
  })

  it("saves diary entries to a file", () => {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window");
    diary.save('./diary.txt');
    expect(fs.existsSync('./diary.txt')).toEqual(true);
  })


})