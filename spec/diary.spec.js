const Diary = require("../diary.js");

describe("Diary", function() {
	beforeEach(function() {
		diary = new Diary();
	});

	it("adds something to the diary", function() {
		diary.entry("<3 Braaaad <3");
		expect(diary.diary.length).toEqual(1);
	});

	it("adds the entries", function() {
		var result = diary.entry("<3 Braaaad <3");
		expect(diary.diary).toEqual(result);
	});

	it("adds the right entry", function() {
		var result = diary.entry("<3 Braaaad <3");
		expect(diary.diary[0].body).toEqual("<3 Braaaad <3");
	});

	it("returns some entries", function() {
		diary.entry("<3 Braaaad <3");
		diary.entry("Brad. Brad. Brad. Brad. Brad.");
		diary.entry("Brad is everything to me.");
		var totalEntries = diary.entries();
		expect(totalEntries).toEqual(diary.diary);
	});

	it("returns some tags", function() {
		diary.entry("I'm standing outside Brad's house #yolo");
		diary.entry("I'm at Brad's window #yolo");
		diary.entry("OMG. What have I done? #sorrynotsorry");
		var tags = diary.tags();
		expect(tags.length).toEqual(3);
	});

	it("returns tagged entries", function() {
		diary.entry("I'm standing outside Brad's house #yolo");
		diary.entry("I'm standing outside Brad's house yolo");
		diary.entry("I'm at Brad's window #yolo");
		diary.entry("OMG. What have I done? #sorrynotsorry");
		var taggedEntries = diary.entriesWithTag("yolo");
		expect(taggedEntries.length).toEqual(2);
	});
});
