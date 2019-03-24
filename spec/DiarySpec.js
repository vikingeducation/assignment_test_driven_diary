const Diary = require("../diary");

describe("Diary", () => {

  beforeEach(() => {
    diary = new Diary()
  })

  describe(".entry", () => {
    it("adds an entry/item into the user's diary", () => {
      let entryCount1 = diary.entries.length
      diary.entry("my diary entry")
      let entryCount2 = diary.entries.length - 1
      expect(entryCount1).toEqual(entryCount2)
    })
    it("adds the correct input into the user's diary", () => {
      let message = "Here we go"
      diary.entry(message)
      let results = diary.entries.pop().text
      expect(message).toEqual(results)
    })
    it("includes the date/time of creation", () => {
      let message = "Here we go"
      diary.entry(message)
      let results = !!(diary.entries.pop().time)
      expect(results).toEqual(true)
    })
    it("allows for optional date argument", () => {
      let timestamp = Date.now()
      diary.entry("Here we go", timestamp)
      let results = diary.entries.pop().time
      expect(results).toEqual(timestamp)
    })
  })
  describe('.entries', () => {
    it('returns a list of all the entries', () => {
      let message1 = "Howdy", message2 = "Hello",
          timestamp = Date.now()
      diary.entry(message1, timestamp) ; diary.entry(message2, timestamp)
      let results = diary.entries
      expect(results).toEqual([ { text : 'Howdy', time : timestamp }, { text : 'Hello', time : timestamp } ])
    })
  })
  describe('.tags', () => {
    it('returns a list of hashtagged words used in entries', () => {
      diary.entry("#run a marathon")
      diary.entry("#bike up a mountain")
      diary.entry("#jump to the moon")

      let results = diary.tags()
      expect(results).toEqual(['run', 'bike', 'jump'])
    })
  })
  describe('.entriesWithTag', () => {
    it('returns a list of all entries that have the tag', () => {
      diary.entry("#run a marathon")
      diary.entry("going on a #run")
      diary.entry("#bike up a mountain")
      diary.entry("#jump to the moon")

      let results = diary.entriesWithTag('run')
      expect(results).toEqual(['#run a marathon', 'going on a #run'])
    })
  })
  describe('.today', () => {
    it('returns list of all entries written today', () => {
      diary.entry("hello", Date.now())
      diary.entry("not me", Date.parse("10/10/10"))
      diary.entry("hello2", Date.now())
      let results = diary.today()
      expect(results).toEqual(['hello', 'hello2'])
    })
  })
  describe('.date', () => {
    it('returns a list of entries on the given date', () => {
      let date = Date.parse("10/10/10")
      diary.entry('yee haw not me')
      diary.entry('pick me', date)
      let results = diary.date(date)
      expect(results).toEqual(['pick me'])
    })
  })
  describe('.search', () => {
    it('returns all entries that possess the given string', () => {
      diary.entry("To dream the impossible dream");
      diary.entry("To reach the unreachable star");
      diary.entry("To watch mission impossible");

      let results = diary.search("impossible")
      expect(results).toEqual(["To dream the impossible dream", "To watch mission impossible" ])
    })
  })
})
