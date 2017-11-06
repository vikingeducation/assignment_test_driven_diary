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

const identityTags = body => {
  var r = RegExp(/\B\#\w+/g);
  let matches = body.match(r);
  if (matches) {
    let tags = matches.map(function(tag) {
      return tag.substring(1);
    });
    return tags;
  }
}
module.exports = Diary;
