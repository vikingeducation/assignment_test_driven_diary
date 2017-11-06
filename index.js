class Diary {
  constructor() {
    this.entries = []
  }

  entry(string, date){
    if (date){
      let entryObject = {
        date,
        string
      }
      this.entries.push(entryObject);
    } else{
    this.entries.push(string)
    }
  }
  entries(){
    return this.entries
  }

}


module.exports = Diary;
