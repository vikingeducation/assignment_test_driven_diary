class Diary {
    constructor(){
        this.entryList = [];
    }

    entry (msg, time) {
        
        if(!time){
            time = Date();
        }

        let entry = {"msg": msg, "timeStamp": time};
        this.entryList.push(entry);
    }
};



module.exports = Diary;