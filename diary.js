class Diary {
  constructor() {
    this.entryArr = [];
  }

  entry(str, date) {
    let entryObj = {};
    entryObj.body = str;
    if (date) entryObj.date = date;
    else {
      entryObj.date = Date.parse(Date());
    }
    this.entryArr.push(entryObj);
  }
}

module.exports = Diary;
