


class Diary {

  constructor() {
    this._entries = [];
    this._tags = [];
  }

  entry(message, date) {
  	if(!date) {
      date = Date.now();
    }
    let messageTag = message.split("#")[1];
    let messageText = message.split("#")[0];
    if (messageTag && !this._tags.includes(messageTag)) {
      this._tags.push(messageTag);
    }
    this._entries.push({ 'message': message, 'date': date, 'tag': tag });
  }

  entries() {
  	return this._entries;
  }


}





module.exports = {Diary};