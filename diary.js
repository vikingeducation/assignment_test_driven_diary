let date = require('date-and-time');
const fs = require("fs");

let now = new Date();
let timeNow = date.format(now, 'YYYY/MM/DD HH:mm:ss');
let dateNow = date.format(now, 'YYYY/MM/DD');

var matchingDates = function (contentList, timeList, dateEntered) {
  if (dateEntered === undefined) {
    dateEntered = new Date();
  }
  var matches = [];
  for (var i = 0; i < timeList.length; i++) {
    if( timeList[i].getMonth() === dateEntered.getMonth()) {
      if( timeList[i].getDay() === dateEntered.getDay()) {
        if(timeList[i].getYear() === dateEntered.getYear()) {
          matches.push(contentList[i]);
        }
      }
    }
  }
  return matches;
}

diary = {
  "contents": [],
  "contentsTime": [],
  entry: function(string, dateAndTime) {
    this.contents.push( string );
    if (dateAndTime) {
      this.contentsTime.push( new Date(dateAndTime) );
      return [string, dateAndTime];
    }
    else {
      this.contentsTime.push( now );
      return [string, timeNow];
    };
  },
  entries: function () {
    return this.contents;
  },
  tags: function () {
    var regex = new RegExp(/#(\w+)/gi)
    var matches = this.contents.toString().match(regex);
    var newMatches = [];
    //Trim off first characters (#)
    for (var i = 0; i < matches.length; i++) {
      matches[i] = matches[i].slice(1);
    }
    //Search and delete dublicates
    for (var i = 0; i < matches.length; i++) {
      for (var u = i+1; u < matches.length; u++) {
        if(matches[i] === matches [u]) {
          matches.splice(u,1);
        }
      }
    }
    return matches;
  },
  entriesWithTag: function (tagToFind) {
    var matches = [];
    for (var i = 0; i < this.contents.length; i++) {
      if (this.contents[i].search('#' + tagToFind) != -1) {
        matches.push(this.contents[i]);
      }
    }
    return matches;
  },
  today: function () {
    return matchingDates(this.contents, this.contentsTime);
  },
  date: function (date) {
    date = new Date(date);
    return matchingDates(this.contents, this.contentsTime, date);
  },
  search: function(str) {
    var matches = [];
    for (var i = 0; i < this.contents.length; i++) {
      if (this.contents[i].search(str) != -1) {
        matches.push(this.contents[i]);
      }
    }
    return matches;
  },
  save: function (path) {
    const jsonObj = JSON.stringify(this.contents);
    fs.writeFileSync(path, jsonObj);
    return true;
  },
  load: function (path) {
    if (fs.statSync(path)) {
      var pulledJson = fs.readFileSync(path, 'utf8');
      pulledJson = JSON.parse(pulledJson);
      this.contents = pulledJson;
      return true;
    }
    else {
      return false;
    }
  }

}

module.exports = diary;
