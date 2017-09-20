const fs = require("fs");
const file = "./diary/diary.txt";

module.exports = () => {
	let contents = fs.readFileSync(file).toString();

	contents = contents.split("\n");
	return contents;
};
