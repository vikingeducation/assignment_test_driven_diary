let Diary = require("./modules/diaryMod.js");

let diary = new Diary();

//load previous diary
diary.load(__dirname + "/diary.txt");

//wish I could do this but I don't quite know an easy way how to
//when I have variable arguments in my function call later
// let commands = {
//   entry: diary.entry
// };
let defaultResponses = {
  entry: "Noted!",
  getEntry: "Couldn't find that entry sorry.",
  entries: "Empty diary.",
  tags: "No tags in diary",
  entriesWithTag: "No entries found",
  date: "No entries found",
  today: "No entries found",
  search: "No entries found"
};

function print(response, command) {
  let output = response || defaultResponses[command];
  console.log(output);
}

//grab the command line arguments
let arguments = process.argv.slice(2);
let command = arguments[0];
let response;

switch (command) {
  case "entry":
    response = diary.entry(arguments[1], arguments[2]);
    break;
  case "getEntry":
    response = diary.getEntry(arguments[1]);
    break;
  case "entries":
    response = diary.entries();
    break;
  case "tags":
    response = diary.tags();
    break;
  case "entriesWithTag":
    response = diary.entriesWithTag(arguments[1]);
    break;
  case "date":
    response = diary.date(arguments[1]);
    break;
  case "today":
    response = diary.today();
    break;
  case "search":
    response = diary.search(arguments[1]);
    break;
  default:
    console.log(`I don't understand what you want from me!!!!`);
}
print(response, command);

//save diary state
diary.save(__dirname + "/diary.txt");
