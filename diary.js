class Diary {
constructor(){
	this.diary = {};
}

entry(str){

let len = Object.keys(this.diary).length || 0

this.diary["entry" + len] = str;

return str;
}

}








module.exports = Diary;