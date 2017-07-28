//on command line input create diary entry
// >> this entry can have a # for reference later

//Methods
//entry : string, string
//entires: none
//tags : none
//entries with tag: string
//today
//date: number
//search: string
//save: string
//load: string
//methods

//diary entry takes 2 parameters: second is optional
//

class Diary {
  constructor() {
    this._entries = [];
  }

  get diaryEntries() {
    return this._entries;
  }
  set diaryEntries(val) {
    this._entries = val;
  }
  // Add an entry to the entries array.
  entry(msg, gmt) {
    msg = msg.trim();
    if (!msg.length) return false;
    if (gmt === undefined || !Number.isInteger(gmt)) {
      gmt = new Date().getTime();
    }
    // Create entry for diary.
    let newEntry = new Entry(msg, gmt);

    // Add to array.
    this._entries.push(newEntry);
  }
}

class Entry {
  constructor(msg, gmtCreated) {
    this.msg = msg;
    this.gmtCreated = gmtCreated;
  }
}

module.exports = Diary;
