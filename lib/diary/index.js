class Diary {
  constructor(filename) {
    this.filename = filename
      ? `../../data/${filename}`
      : "../../data/diary.json";
  }
}

module.exports = Diary;
