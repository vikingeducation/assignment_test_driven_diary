class Diary {
  constructor() {
    this.entries = []
  }

  entry(string, date){
    this.entries.push(string)
  }
}


module.exports = Diary;
