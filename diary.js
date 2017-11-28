class Diary {
constructor(){
	this.diary = {};
}

entry(str, date){
let currentTime = new Date();
this.diary['currentT'] = currentTime;
this.diary['mesg'] = str;
if (date) {
this.diary['userD'] = date;
} 

diary.entries(){};
//return this.diary.mesg;
}

}


module.exports = Diary;