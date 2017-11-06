const identifyTags = string => {
  var r = RegExp(/\B\#\w+/g);
  let matches = string.match(r);
  if (matches) {
    let tags = matches.map(function(tag) {
      return tag.substring(1);
    });
    return tags;
  }
}


class Diary {
  constructor() {
    this.entries = []
    this.tags = []
  }

  entry(string, date){
    let tag = identifyTags(string)
    if(tag){
      console.log(tag)
      this.tags.push(tag[0])
    }
    if (date){
      let entryObject = {
        date,
        string
      }
      if (tag){
        entryObject.tag = tag
      }
      this.entries.push(entryObject);
    } else {
      if (tag){
        let entryObject = {
          string,
          tag
        };
        this.entries.push(string)
      }
    this.entries.push(string)

    }
  }
  entries(){
    return this.entries
  }

  tags(){
    return this.tags
  }

  entriesWithTag(tag){
    let results = []
    this.entries.forEach( entry => {
      if (entry.tags){
        if (entry.tags.includes(tag)) {
          results.push(entry)
        };
      }
    })
    return results
  }

  today() {
    let today = new Date()
    let results = []
    this.entries.forEach(entry => {
      if (entry.date === today){
        results.push(entry.string)
      }
    })
    console.log(results)
    return results;
  }

  date(input){
    let searchDate = input
    let results = []
    this.entries.forEach(entry => {

      if (entry.date === searchDate){
        results.push(entry.string)
      }
    })
    return results
  }

  search(string){
    let results = []
    this.entries.forEach( entry => {
      if (entry){
        if (entry.match(string)){
            console.log(entry)
          results.push(entry);
        }
      }
    })
    return results
  }

  identityTags(string){
    var r = RegExp(/\B\#\w+/g);
    let matches = string.match(r);
    if (matches) {
      let tags = matches.map(function(tag) {
        return tag.substring(1);
      });
      return tags;
    }
  }
}

// identityTags(string){
//   var r = RegExp(/\B\#\w+/g);
//   let matches = string.match(r);
//   if (matches) {
//     let tags = matches.map(function(tag) {
//       return tag.substring(1);
//     });
//     return tags;
//   }
// }

// let diary = new Diary()
// diary.entry( 'hi #milo')
// console.log(diary.entries)
// console.log(diary.tags)
//
// diary.entry("z", todayDate)
// diary.entry("s", todayDate)
// diary.entry("b", 23)
// let results = diary.today()
// console.log(results)
let search = new Diary()
search.entry("milo is cool");
search.entry("milo is the best");
search.entry("no one")
let results = search.search("milo");

console.log(results)
module.exports = Diary;
