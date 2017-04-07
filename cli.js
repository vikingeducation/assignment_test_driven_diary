const Diary = require("./lib/diary");
const diary = new Diary();

diary.entry("Yes");
diary.entry("No");

diary.save('./.diary');
