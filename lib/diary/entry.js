const fs = require("fs");
let file = "./diary/diary.txt";

module.exports = (diaryEntry, date=new Date()) => {
  console.log(diaryEntry, date)
	fs.appendFileSync(file, `${date}:${diaryEntry}\n`);
};


