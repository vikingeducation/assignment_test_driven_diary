let Diary = require("./modules/diary.js");

let diary = new Diary();

//load previous diary
diary.load("./diary.txt");

//save diary state
