var jsonPath = "./data/diary.json";
var dateFormatter = require('./dateFormatter');
const fs = require("fs");

const diary = {};

diary.entry = (str, date) => {
  if (!date) {
    var date = new Date();
    var formattedDate = dateFormatter.format(date);
  }
  let entry = `${str} - ${formattedDate}`;
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    data = JSON.parse(data, null, 2);
    data.push(entry)
    fs.writeFileSync(jsonPath, JSON.stringify(data));
  })
  return entry;
};

module.exports = diary;
