
const Diary = function() {
  this.diary = [];

  const entry = function(message, date) {
    date = date || Date.now();

    let diaryEntry = {
      message,
      date
    }
    this.diary.push(diaryEntry);
  }
}

module.exports = Diary;
