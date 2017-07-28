const fs = require("fs");
const file = "./diary/diary.txt";

module.exports = () => {
	let tags = [];
	let contents = fs.readFileSync(file).toString();

	contents = contents.split("\n");

	contents.forEach(content => {
		content = content.split(" #");
		content = content.slice(1);

		content.forEach(item => {
			tags.push(item);
		});
	});

	return tags;
};
