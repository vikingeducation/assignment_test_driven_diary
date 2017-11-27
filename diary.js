class Diary {
  constructor() {
    this.store = [];
    this.tagsStore = [];
    this.DAY_MILLISECONDS = 1000*60*60*24;
  }

  entry(string, date = new Date()) {
    let tag;
    if (string.indexOf('#') > -1) {
      tag = string.split('#')[1];
      if (!this.tagsStore.includes(tag)) {
        this.tagsStore.push(tag)
      }
    }

    this.store.push({
      entry: string,
      date: date,
      tag: tag 
    });

  }

  entries() {
    return this.store;
  }

  tags() {
    return this.tagsStore;
  }

  entriesWithTag(hashtag) {
    return this.store.map((entryObj) => {
      if (entryObj.tag == hashtag) {
        return entryObj.entry;
      }
    }) 
  }

  today() {
    const today = new Date();
    return this.store.map((entryObj) => {
      if (today.getTime() - entryObj.date.getTime() < this.DAY_MILLISECONDS) {
        return entryObj.entry;
      }
    })   
  }
}

module.exports = Diary;
