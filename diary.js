class Diary {
constructor(){
	this.diary = {};
}

entry(str, date){
let len = Object.keys(this.diary).length || 0
let currentTime = new Date();
if (date) {
this.diary[date] = str;
} else {
this.diary[currentTime] = str;
}
return [str,date];
}

}


module.exports = Diary;