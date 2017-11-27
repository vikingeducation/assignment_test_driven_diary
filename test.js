const diary = require('./diary.js');
const fs = require('fs');

//diary.entry("lsjdflksjdfklsjd")

fs.readFile('./diary.json', 'utf8', (err, data) => {
  console.log(data);
});
