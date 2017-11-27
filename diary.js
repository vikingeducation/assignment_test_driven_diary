class Diary {
  constructor() {
    this.entryArr = [];
    this.tagArray = [];
  }

  entry(str, date) {
    let entryObj = {};
    entryObj.entryTag = '';
    entryObj.body = str;
    if (date) entryObj.date = date;
    else {
      entryObj.date = Date.parse(Date());
    }
    let splitArray;
    if (/\#/.test(entryObj.body)) {
      splitArray = entryObj.body.split(' ');
      splitArray.map(el => {
        if (el[0] === '#') {
          entryObj.entryTag = el;
          if (!this.tagArray.includes(el)) {
            this.tagArray.push(el.substring(1));
          }
        }
      });
    }
    this.entryArr.push(entryObj);
  }
  tags() {
    return this.tagArray;
  }
  entriesWithTag(string) {
    let resultArray = [];
    this.entryArr.map(el => {
      if (string === el.entryTag) {
        resultArray.push(el.body);
      }
    });
    return resultArray;
  }
}

module.exports = Diary;
