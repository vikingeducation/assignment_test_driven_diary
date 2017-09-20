const fs = require("fs");
const file = "./diary/diary.txt";

module.exports = () => {
  let hoje = new Date();
  let hojeParsed = Date.parse(hoje);
  let hojeUnParsed = new Date(hojeParsed).getDate();
  console.log(hojeUnParsed);
  let entries = [];
  let contents = fs.readFileSync(file).toString();

  contents = contents.split("\n");

  contents.forEach(entry => {
    entry = entry.split(':')
    if (Date(entry[0]).getDate() === hojeUnParsed) {
      entries.push(entry)
    }
  });

  console.log(entries);
  return entries;
};

// Date(Date.parse("10/10/10")).getDate()