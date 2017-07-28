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
    this._tags = {};
    // this._entriesByTag = {};
  }

  get length() {
    return this._entries.length;
  }

  get entries() {
    return this._entries;
  }
  set entries(val) {
    this._entries = val;
  }

  get tags() {
    return Object.keys(this._tags);
  }
  set tags(val) {
    this._tags[val] = [];
  }

  // Add an entry to the entries array.
  entry(msg, gmt) {
    msg = msg.trim();
    if (!msg.length) return false;

    // Make sure our date is valid and an integer.
    if (gmt === undefined || !Number.isInteger(gmt)) {
      gmt = new Date().getTime();
    }

    // Parse out any hash tags.
    let newEntry,
      splitMsg = msg.split("#");
    if (splitMsg.length > 1) {
      newEntry = new Entry(msg, gmt, splitMsg[1]);
      if (this._tags[splitMsg[1]] !== undefined) {
        this._tags[splitMsg[1]].push(newEntry);
      } else {
        this._tags[splitMsg[1]] = [newEntry];
      }
    } else {
      newEntry = new Entry(msg, gmt);
    }

    // Add to list of entries.
    this._entries.push(newEntry);
  }
}

class Entry {
  constructor(msg, gmtCreated, tag) {
    this.msg = msg;
    this.gmtCreated = gmtCreated;
    this.tag = tag;
  }
}

module.exports = Diary;
