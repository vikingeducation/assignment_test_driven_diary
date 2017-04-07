const Diary = require("./lib/diary");
const diary = new Diary();

diary.entry("I love Brad", Date.now());

console.log(diary._entries);
