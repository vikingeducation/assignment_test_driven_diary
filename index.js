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
    this.tags = new Set()
  }

  entry(string, date){
    let tags = identifyTags(string)
    if(tags){
      this.tags.add(tags)
    }
    if (date){
      let entryObject = {
        date,
        string
      }
      if (tags){
        entryObject.tags = tags
      }
      this.entries.push(entryObject);
    } else {
      if (tags){
        let entryObject = {
          string,
          tags
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
    return [...this.tags]
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
      if (entry.string){
        if (entry.string.match(string)){
          results.push(entry.string);
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
module.exports = Diary;
