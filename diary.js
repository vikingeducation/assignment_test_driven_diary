let entriesArr = [];


class Diary {

  entry(message, date) {
  	if(date) {
  		entriesArr.push({ 'message': message, 'date': date });
  	} else {
  		entriesArr.push({ 'message': message, 'date': Date.now() });
  	}
  }

  entries() {
  	return entriesArr;
  }

}





module.exports = {entriesArr, Diary};