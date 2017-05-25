function Diary() {
  // constructor () {
  //   this.entries = [];
  // }
  var _entries = [];

  this.entry = (message, date) => {
    let data = {
      message,
      date: date || "none"
    };

    _entries.push(data);
    return 'Duly Noted!';
  };

  this.entries = () => {
    let messages = _entries.map(entry => {
      return entry.message + "\nDate: " + entry.date;
    });

    return messages;
  };

}

module.exports = Diary;