const Diary = require("./index");

const diary = new Diary()

let argument = process.argv[2]

diary.argument(process.argv[3], process.argv[4])
