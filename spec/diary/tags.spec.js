const { tags } = require("../../lib/diary");
const fs = require("fs");

const file = "./diary/diary.txt";

describe("The tags method", function() {
	beforeEach(() => {
		fs.writeFileSync(file, "entry1 #yolo #running\n entry2 #chocolate");
	});

	it("should return a list of all tags", function() {
		let tagList = tags();
		let expectedArray = ["yolo", "running", "chocolate"];
		expect(tagList).toEqual(expectedArray);
	});
});
