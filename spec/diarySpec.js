var Diary = require('../modules/diary')

describe('Diary', function () {

  let diary
  let pastDate = "Mon, 25 Dec 1995 13:30:00 GMT"
  let todaysDate = new Date()

  beforeEach(function() {
    diary = new Diary()
  })

  describe('#entry', function () {
    it("adds an entry to the user's diary", function () {
      var body = "sample body"
      expect(diary.entries.includes([body])).toBe(false)
      diary.addEntry(body)
      expect(diary.entries[0].includes(body)).toBe(true)
    })

    it("puts a copy of all hashtags in a entry into the diary's tags collection", function(){
      var tag1 = '#tag1'
      var tag2 = '#tag2'
      var body = `sample body ${tag1} ${tag2}`
      expect(diary.tags.includes(tag1)).toBe(false)
      expect(diary.tags.includes(tag2)).toBe(false)

      diary.addEntry(body)
      expect(diary.tags.includes(tag1)).toBe(true)
      expect(diary.tags.includes(tag2)).toBe(true)
    })

    it("does not put duplicates of tags into the diary's tags collection", function(){
      var tag1 = '#tag1'
      var body1 = `sample body ${tag1}`
      var body2 = `sample body ${tag1}`

      expect(diary.tags.includes(tag1)).toBe(false)
      expect(diary.tags.length).toEqual(0)

      diary.addEntry(body1)
      expect(diary.tags.includes(tag1)).toBe(true)
      expect(diary.tags.length).toEqual(1)

      diary.addEntry(body2)
      expect(diary.tags.length).toEqual(1)
    })

    it("contains the create date/time", function () {
      var body = "sample body"
      var createdAt = new Date().toDateString()

      diary.addEntry(body)
      expect(diary.entries[0][1].toDateString()).toEqual(createdAt)
    })

    it("takes an optional date argument", function () {
      var body = "sample body"
      var date = pastDate

      diary.addEntry(body)
      expect(diary.entries[0][1] <= new Date()).toBe(true)

      diary.addEntry(body, date)
      expect(diary.entries[1][1]).toEqual(new Date(date))
    })
  })// #entry

  describe('#entries', function () {
    it("returns a list of all entries", function () {
      var entry1 = 'entry1'
      var entry2 = 'entry2'
      diary.entries.push(entry1)
      diary.entries.push(entry2)
      expect(diary.entries).toEqual([entry1, entry2])
    })
  })// #entries

  describe('#tags', function () {
    it("returns a list of all tags", function () {
      var tag1 = '#tag1'
      var tag2 = '#tag2'
      diary.tags.push(tag1)
      diary.tags.push(tag2)
      expect(diary.tags).toEqual([tag1, tag2])
    })
  })// #tags

  describe('#entriesWithTag', function () {
    it("returns a list of all entries with a given tag", function () {
      var tagName = '#yolo'
      expect(diary.entriesWithTag(tagName)).toEqual([])

      var body1 = `sample body 1 ${tagName}`
      var body2 = `sample body 2 ${tagName}`

      diary.addEntry(body1)
      diary.addEntry(body2)
      expect(diary.entriesWithTag(tagName)[0].includes(body1) && diary.entriesWithTag(tagName)[1].includes(body2)).toEqual(true)
    })

    it("does not include entries without the given tag", function () {
      var tagName1 = '#yolo'
      var tagName2 = '#fomo'
      expect(diary.entriesWithTag(tagName1).length).toEqual(0)

      var body1 = `sample body 1 ${tagName1}`
      var body2 = `sample body 2 ${tagName2}`

      diary.addEntry(body1)
      diary.addEntry(body2)
      expect(diary.entriesWithTag(tagName1)[0].includes(body1) && !diary.entriesWithTag(tagName1)[0].includes(body2)).toEqual(true)
    })
  })// #entriesWithTag

  describe('#today', function () {
    it("returns a list of all entries written today", function () {

      diary.addEntry("sample entry from the past", pastDate)
      diary.addEntry("sample entry from today", todaysDate)

      expect(diary.today().length).toEqual(1)
    })
  })// #today

  describe('#date', function () {
    it("returns a list of all entries written on the given date", function () {
      diary.addEntry("sample entry from the past", pastDate)
      expect(diary.date("12/25/1995").length).toEqual(1)
    })

    it("returns a list of all entries written today if not date is given", function () {
      diary.addEntry("sample entry from the past", pastDate)
      diary.addEntry("sample entry from today")
      expect(diary.date().length).toEqual(1)
    })
  })// #date


  describe('#search', function () {
    it("returns a list of all notes with the given string", function () {
      diary.addEntry("sample entry 1")
      diary.addEntry("sample entry 2")
      expect(diary.search("1").length).toEqual(1)
    })

    it("is case-insensitive", function () {
      diary.addEntry("Sample entry 1")
      diary.addEntry("sample entry 2")
      expect(diary.search("s").length).toEqual(2)
    })

    it("handles leading and trailing whitespaces", function () {
      diary.addEntry("sample entry")
      expect(diary.search("   sample   ").length).toEqual(1)
    })

    it("prompts the user to enter a string if the input is blank", function () {
      diary.addEntry("sample entry")
      expect( function(){ diary.search() } ).toThrowError('Please enter a search term')
    })
  })// #search

  describe('#save', function () {
    xit("persists the current state of the diary to the given file", function () {
      expect( diary.save("./.diary") ).to//
    })
  })// #save

  describe('#load', function () {
    xit("loads the the diary object with the entries stored in the given file", function () {
      expect( diary.load("./.diary") ).to//
    })
  })// #load

})//Diary
