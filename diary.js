var currentDiary = {};

let diary = {
  load: path => {
    currentDiary = require(path);
    return currentDiary;
  },

  entry: (message, date) => {
    let messageTags = [];
    const tagsRegex = /#(\w+)/g;
    let match = tagsRegex.exec(message);
    while (match !== null) {
      messageTags.push(match[1]);
      match = tagsRegex.exec(message);
    }
    let count;
    if (currentDiary.entries) {
      let ids = Object.keys(currentDiary.entries).sort();
      count = ((ids[ids.length - 1] *= 1) + 1).toString();
    } else {
      count = "1";
    }
    return {
      entry: message,
      tags: messageTags,
      id: count,
      date: Math.floor(Date.now() / 1000)
    };
  },

  insertEntry: () => {},

  entriesWithTag: () => {},

  entries: () => {},

  tags: () => {},

  today: () => {},

  date: () => {},

  search: () => {},

  save: () => {}
};

let result = diary.entry("hello friends #yay");
console.log(result);

module.exports = diary;
