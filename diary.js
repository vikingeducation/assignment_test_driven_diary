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
    this.records = []
    this.tags = []
  }

  entry(string, date){
    let entryObject = {string}
    let tag = identifyTags(string)
    if (tag){
      tag = tag[0]
      this.tags.push[tag]
      entryObject.tag = tag
    }

    if (date){
      entryObject.date = date.toDateString();
    }
    this.records.push(entryObject);
  }

  //   if (date) {
  //     date = date.toDateString()
  //   } else {
  //     let date = new Date()
  //     date = date.toDateString()
  //     console.log("date", date)
  //   }
  //   let tag = identifyTags(string)
  //   if (tag){
  //     tag = tag[0]
  //   }
  //   console.log("tag", tag)
  //   if(tag){
  //     console.log(tag)
  //     this.tags.push(tag)
  //   }
  //   if (date){
  //     let entryObject = {
  //       "date" : date,
  //       string
  //     }
  //     console.log("date entryObect", entryObject)
  //     if (tag){
  //       entryObject["tag"] = tag
  //       console.log("entryObject", entryObject)
  //     }
  //     this.records.push(entryObject);
  //     console.log("entryObject added", this.records)
  //   } else {
  //     if (tag){
  //       let entryObject = {
  //         string,
  //         tag,
  //         "date" : date
  //       };
  //       this.records.push(entryObject)
  //     }
  //   this.records.push(string)
  //
  //   }
  // }
  entries(){
    let results = []
    this.records.forEach(entry => {
      results.push(entry.string)
    })
    return results
  }

  returnTags(){
    return [ ...new Set(this.tags) ]
  }

  entriesWithTag(tag){
    let results = []
    this.records.forEach( entry => {
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
    this.records.forEach(entry => {
      console.log("entry", entry)
      if(entry.date){
        console.log("entry.date", entry.date);
        if (entry.date === today.toDateString()){
          results.push(entry.string)
        }
      }
    })
    console.log(results)
    return results;
  }

  date(input){
    let searchDate = input
    let results = []
    this.records.forEach(entry => {

      if (entry.date === searchDate){
        results.push(entry.string)
      }
    })
    return results
  }

  search(string){
    let results = []
    this.records.forEach( entry => {
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
search.entry("sfe")

search.entry("I'm at Brad's window #yolo");
search.entry("OMG. What have I done? #sorrynotsorry");
search.today()
module.exports = Diary;
