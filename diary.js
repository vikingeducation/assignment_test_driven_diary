class Diary {
  constructor() {
    this.store = [];
    this.tagsStore = [];
  }

  entry(string, date = new Date()) {
    this.store.push({
      entry: string,
      date: date
    });

    if (string.indexOf('#') > -1) {
      let tag = string.split('#')[1];
      if (!this.tagsStore.includes(tag)) {
        this.tagsStore.push(tag)
      }
    }
  }

  entries() {
    return this.store;
  }

  tags() {
    return this.tagsStore;
  }
}

module.exports = Diary;