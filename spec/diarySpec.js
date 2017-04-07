var {Diary, entriesArr} = require('../diary.js');
var diary = new Diary();


describe("creates an entry", function() {

	it("adds entry to internal array", function() {
		diary.entry("Brad is everything to me.")
    	var latestEntry = entriesArr[entriesArr.length - 1]
			expect(latestEntry.message).toEqual("Brad is everything to me.");
	})

	it("adds entry to internal array", function() {
		diary.entry("<3 Braaaad <3")
    	var latestEntry = entriesArr[entriesArr.length - 1]
			expect(latestEntry.message).toEqual("<3 Braaaad <3");
	})

	it("adds entry and date to internal array", function() {
		diary.entry("Brad. Brad. Brad. Brad. Brad.", Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"))
    	var latestEntry = entriesArr[entriesArr.length - 1]
		expect(latestEntry).toEqual({"message": "Brad. Brad. Brad. Brad. Brad.", 'date': Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")});
	})

	describe("lists all entries", function() {

		it("lists all entries", function() {
			var allEntries = diary.entries();
			expect(allEntries.length).toEqual(entriesArr.length);
		})
	})

})

