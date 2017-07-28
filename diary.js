
const Diary = function() {
  this.diary = [];

  this.entry = function(message, date) {
    if(typeof message !== String) throw new Error("First param must be string");
    date = date || Date.now();

    let diaryEntry = {
      message,
      date
    }
    this.diary.push(diaryEntry);
    return diaryEntry;
  }
}

module.exports = Diary;
