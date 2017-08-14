class Diary {
    
    constructor() {
        this.entryList = [];
    }

    entry(msg, time) {

        if (!time) {
            time = Date();
        }

        let tags = checkForTags(msg);
        let entry = { "msg": msg, "timeStamp": time, "tags": tags};
        
        this.entryList.push(entry);
    }
};


function checkForTags(message) {
    
    let entryWords = message.trim().split(" ");
    let tags = entryWords.filter(word => {
        if(word.includes("#")){
              return word.substring(1, word.length);      
        }
    });

    return tags || [];
}


module.exports = Diary;