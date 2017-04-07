


class Diary {

  constructor() {
    this._entries = [];
    this._tags = [];
  }

  entry(message, date) {
  	if(!date) {
      date = Date.now();
    }
    let messageTag = message.split(" #")[1];
    let messageText = message.split(" #")[0];
    if (messageTag && !this._tags.includes(messageTag)) {
      this._tags.push(messageTag);
    }
    this._entries.push({ 'message': messageText, 'date': date, 'tag': messageTag });
  }

  entries() {
  	return this._entries;
  }

  tags() {
    return this._tags;
  }

  entriesWithTag(tag) {
    var messagesWithTag = [];
    this._entries.forEach( (entry) => {
      if(entry.tag === tag) {
        messagesWithTag.push(entry);
      }
    });
    return messagesWithTag;
  }


}





module.exports = {Diary};