const fs = require("fs");
let file = "./diary/diary.txt";

module.exports = diaryEntry => {
	fs.appendFileSync(file, `\n${diaryEntry}\n`);
};
