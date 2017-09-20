const fs = require("fs");
const file = "./diary/diary.txt";

module.exports = (tag) => {
  tag = `#${tag}`
	let entries = [];
	let contents = fs.readFileSync(file).toString();

	contents = contents.split("\n");

	contents.forEach(entry => {
  	if (entry.includes(tag)) {
      entries.push(entry);
    }
  });

  console.log(entries);
	return entries;
};
