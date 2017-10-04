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
});
