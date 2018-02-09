class Diary {
  constructor(cipherKey) {
    if(cipherKey != undefined && cipherKey === cipherKey.toUpperCase()) {
      throw Error('Bad key');
    }
    this.cupherKey = cipherKey
    this.key = alphabet.join('')

  }

  entry(){}

  entries(){}

  entriesWithTag(tag){}

  tags(){}

  today(){}

  date(){}

  search(){}

  save(){}

  load(){}
}

module.exports = Diary
