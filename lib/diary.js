var json = require('../data/diary.json');

function Diary(){

}

Diary.prototype.entry = (str, date) => {
  return ('in the diary');
};


module.exports = Diary;