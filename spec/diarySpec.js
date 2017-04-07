var {Diary} = require('../diary.js');
var diary;


describe("Diary", function() {

  beforeEach(function() {
    diary = new Diary();
  })

  describe("adding entries", function() {
    it("adds entry to internal array", function() {
      diary.entry("Brad is everything to me.")
      var latestEntry = diary._entries[0]
      expect(latestEntry.message).toEqual("Brad is everything to me.");
    })

    it("adds entry to internal array", function() {
      diary.entry("<3 Braaaad <3")
      var latestEntry = diary._entries[0]
      expect(latestEntry.message).toEqual("<3 Braaaad <3");
    })

    it("adds entry and date to internal array", function() {
      diary.entry("Brad. Brad. Brad. Brad. Brad.", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"))
      var latestEntry = diary._entries[0]
      expect(latestEntry).toEqual({"message": "Brad. Brad. Brad. Brad. Brad.", 'date': Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")});
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

})

