//Check for tags starting # in a message. 
checkForTags = (message) => {

    let entryWords = message.trim().split(" ");
    let tags = [];

    entryWords.forEach(word => {
        if (word.includes('#')) tags.push(word.substring(1, word.length));
    });


    return tags || [];
}

removeTags = (message) => {
    return message.substring(0, message.indexOf('#')-1);
};

module.exports = {checkForTags, removeTags}