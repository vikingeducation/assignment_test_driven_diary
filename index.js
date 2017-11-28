let Entry = require("./entries");
let diary = require("./mainDiary");

let start = () => {
  //start listening to stdin
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  let showMessage = err => {
    console.log("Welcome back to your secret diary!");
    console.log("======================================");
    console.log("What do you have to share with me today?");
    if (err) {
      console.error(err);
    }
  };

  // Display message
  showMessage();

  // Handler for starting input
  let onData = data => {
    data = data.trim();

    if (data.split(" ")[0] === "entry") {
      let newEntry = data
        .split(" ")
        .slice(1)
        .join(" ");
      let addEntry = new Entry(newEntry);
      console.log(addEntry.entry);
      process.exit();
    } else if (data.split(" ")[0] === "entries") {
      process.stdin.removeAllListeners("data");
      process.stdin.on("data", onSearch);
    } else {
      console.log("Invalid choice");
    }
  };

  //listening for data entry
  process.stdin.on("data", onData);
};

// Start the app
start();
