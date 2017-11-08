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
    this._entries = []
    this._tags = {}
  }

  entry(str, date = Date.now()){
    let entryObject = {
      str,
      date
    }
    let tag = identifyTags(str)
    if (tag){
      tag = tag[0]
      console.log("entryObject", entryObject)
      console.log("this._tags[tag]", this._tags[tag])
      if (this._tags[tag]){
        console.log("tag, entryObject", tag, entryObject)

        this._tags[tag].push(entryObject.str)
        console.log("after adding new object", this.tags.tag)
      } else{
        this._tags[tag] = []
        this._tags[tag].push(entryObject.str);
        console.log("this._tags[tag] for new one ", this._tags)
      }
    }
    this._entries.push(entryObject)
  }

  entries(){
    let results = [];
    console.log(this._entries)
    this._entries.forEach(entry => {
      results.push(entry.str)
    });
    return results
  }

  entriesWithTag(tag){
    let results = [];
    console.log(this._tags)

    this._tags[tag].forEach(entry => {
      results.push(entry)
    })

    return results;
  }

  tags(){
    return Object.keys(this._tags)
  }

  today() {
    let results = [];
    let todayDate = new Date()
    todayDate = todayDate.toDateString()
    this._entries.forEach(entry => {
      let entryDate = new Date(entry.date)
      if (entryDate.toDateString() === todayDate){
        results.push(entry.str)
      }
    })
    return results
  }

  date(findDate){
    let results = []
    findDate = new Date(findDate)
    findDate = findDate.toDateString();
    this._entries.forEach(entry => {
      let entryDate = new Date(entry.date)
      if (entryDate.toDateString() === findDate){
        results.push(entry.str)
      }
    })
    return results
  }

  search(string){
      let results = []
      this._entries.forEach( entry => {
        if (entry){
          if (entry.str.match(string)){
              console.log(entry)
            results.push(entry.str);
          }
        }
      })
      return results
    }

  save(path) {
    let json = {entries : this._entries}
    fs.writeFileSync(path, JSON.stringify(json, null, 2))
  }

  load(path){
    let json = JSON.parse(fs.readFileSync(path));
    this._entries = json.entries;
  }
}

//   entry(string, date){
//     let tag = identifyTags(string)
//     if(tag){
//       console.log(tag)
//       this.tags.push(tag[0])
//     }
//     if (date){
//       let entryObject = {
//         date,
//         string
//       }
//       if (tag){
//         entryObject.tag = tag
//       }
//       this.records.push(entryObject);
//     } else {
//       if (tag){
//         let entryObject = {
//           string,
//           tag
//         };
//         this.records.push(string)
//       }
//     this.records.push(string)
//
//     }
//   }
//   entries(){
//     return this.records
//   }
//
//   returnTags(){
//     return [ ...new Set(this.tags) ]
//   }
//
//   entriesWithTag(tag){
//     let results = []
//     this.records.forEach( entry => {
//       console.log("entry", entry)
//       let entryTag = identifyTags(entry)
//       if (entryTag[0] === tag){
//         results.push(entry)
//       }
//     })
//     return results
//   }
//
//   today() {
//     let today = new Date()
//     let results = []
//     this.records.forEach(entry => {
//       if (entry.date === today){
//         results.push(entry.string)
//       }
//     })
//     console.log(results)
//     return results;
//   }
//
//   date(input){
//     let searchDate = input
//     let results = []
//     this.records.forEach(entry => {
//
//       if (entry.date === searchDate){
//         results.push(entry.string)
//       }
//     })
//     return results
//   }
//
//   search(string){
//     let results = []
//     this.records.forEach( entry => {
//       if (entry){
//         if (entry.match(string)){
//             console.log(entry)
//           results.push(entry);
//         }
//       }
//     })
//     return results
//   }
//
//   identityTags(string){
//     var r = RegExp(/\B\#\w+/g);
//     let matches = string.match(r);
//     if (matches) {
//       let tags = matches.map(function(tag) {
//         return tag.substring(1);
//       });
//       return tags;
//     }
//   }
// }

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
let diary = new Diary();
diary.entry("I'm standing outside Brad's house #yolo");
diary.entry("I'm at Brad's window #yolo");
diary.entry("OMG. What have I done? #sorrynotsorry");
diary.entriesWithTag("yolo")

module.exports = Diary;
