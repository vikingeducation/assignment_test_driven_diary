var {Diary} = require('../diary.js');
var diary;
const fs = require('fs');


describe("Diary", function() {

  beforeEach(function() {
    diary = new Diary();

    diary.entry("Brad is everything to me. #yolo");
    diary.entry("Brad. Brad. Brad. Brad. Brad. #sorrynotsorry", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"))
    diary.entry("Brad is everything to me too. #yolo");
    diary.entry("Another one. #anothermsg", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"))
    diary.entry("testing 1", Date.parse("Fri, 6 Apr 2017"));
    diary.entry("testing 2", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"))
    })

  describe("adding entries", function() {
    it("adds entry to internal array", function() {
      diary.entry("Brad is everything to me.")
      var latestEntry = diary._entries[diary._entries.length - 1]
      expect(latestEntry.message).toEqual("Brad is everything to me.");
    })

    it("adds entry to internal array", function() {
      diary.entry("<3 Braaaad <3")
      var latestEntry = diary._entries[diary._entries.length - 1]
      expect(latestEntry.message).toEqual("<3 Braaaad <3");
    })

    it("adds entry and date to internal array", function() {
      diary.entry("Brad. Brad. Brad. Brad. Brad.", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"))
      var latestEntry = diary._entries[diary._entries.length - 1]
      expect(latestEntry).toEqual({"message": "Brad. Brad. Brad. Brad. Brad.", 'date': Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")});
    })

    it("adds entry with tag", function() {
      diary.entry("I'm standing outside Brad's house #yolo", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
      var latestEntry = diary._entries[diary._entries.length - 1];
      expect(latestEntry).toEqual({ 'message': "I'm standing outside Brad's house", 'date': Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"), 'tag': "yolo"});

    })    
  })

  describe("listing entries", function() {
    it("lists all entries", function() {
      diary.entry("Brad is everything to me.");
      diary.entry("Brad. Brad. Brad. Brad. Brad.", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"))
      var allEntries = diary.entries();
      expect(allEntries.length).toEqual(diary._entries.length);
    })
  })

  describe("tags and time", function() {

    it("lists all tags", function() {
      var allTags = diary.tags();
      expect(allTags).toContain('yolo');
    })

    it("lists all tags", function() {
      var allTags = diary.tags();
      expect(allTags).toContain('sorrynotsorry');
    })

    it("gets all messages with tag", function() {
      var messagesWithTag = diary.entriesWithTag("yolo");
      expect(messagesWithTag).toContain('Brad is everything to me.')
    })

    it("gets all messages with tag", function() {
      var messagesWithTag = diary.entriesWithTag("yolo");
      expect(messagesWithTag.length).toEqual(2);
    })

    it("gets all messages written today", function() {
      var messagesToday = diary.today();
      expect(messagesToday).toContain("Brad is everything to me too.")
    })

    it("gets all messages written today", function() {
      var messagesToday = diary.today();
      expect(messagesToday.length).toEqual(2);
    })

    it("returns a list of all entries written on the given date", function() {
      var messagesOnDate = diary.date(Date.parse("Fri, 6 Apr 2017"));
      expect(messagesOnDate).toContain("testing 1");
    })

    it("returns a list of all entries written on the given date", function() {
      var messagesOnDate = diary.date(Date.parse("Fri, 6 Apr 2017"));
      expect(messagesOnDate.length).toEqual(1);
    })

  })

  describe("search messages for text", function() {
    it("finds messages containing input text", function() {
      var messagesWithText = diary.search("Brad");
      expect(messagesWithText).toContain("Brad is everything to me.");
    })

    it("finds messages containing input text", function() {
      var messagesWithText = diary.search("Brad");
      expect(messagesWithText.length).toEqual(3);
    })

  });

  describe("save and load files", function() {
    beforeEach(function() {
      fs.writeFileSync('testDiary.json', json.stringify({}));
    })

    it("saves current entries to file", function() {
      diary.save('./testDiary.json');
      var entries = diary.load('./testDiary.json')
      expect(entries.length).toEqual(6);
    })

    it("saves current entries to file", function() {
      diary.save('./testDiary.json');
      var entries = diary.load('./testDiary.json')
      expect(entries[0].tag).toEqual("yolo");
    })
  })

})

