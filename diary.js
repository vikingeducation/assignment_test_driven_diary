const fs = require('fs');


class Diary {

  constructor() {
    this._entries = [];
    this._tags = [];
  }

  entry(message, date) {
  	if(!date) {
      date = new Date();
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
        messagesWithTag.push(entry.message);
      }
    });
    return messagesWithTag;
  }

  today() {
    var messagesToday = [];
    var today = new Date();

    this._entries.forEach( (entry) => {
      var messageTime = new Date(entry.date);
      if(messageTime.toDateString() === today.toDateString()) {
        messagesToday.push(entry.message);
      }
    });
    return messagesToday;
  }

  date(messageDate) {
    var messagesOnDate = [];
    var messageDay = new Date(messageDate);
    this._entries.forEach((entry) => {
      var entryDay = new Date(entry.date);
      if (messageDay.toDateString() === entryDay.toDateString()) {
        messagesOnDate.push(entry.message);
      }
    });
    return messagesOnDate;
  }

  search(str) {
    var messagesThatMatch = [];

    this._entries.forEach( (entry) => {
      if(entry.message.indexOf(str) >= 0) {
        messagesThatMatch.push(entry.message);
      }
    })
    return messagesThatMatch;
  }

  save(fileDest) {
    var jsonData = require(`./${fileDest}`);
    this._entries.forEach((entry) => {
      jsonData.entries.push(entry);
    });
    fs.writeFileSync('./${fileDest}', JSON.stringify(jsonData, null, 2))
  }


}





module.exports = {Diary};