class Diary {
  constructor() {
    this.store = [];
  }

  entry(string, date = new Date()) {
    this.store.push({
      entry: string,
      date: date
    });
  }

  entries() {
    return this.store;
  }
}

module.exports = Diary;
