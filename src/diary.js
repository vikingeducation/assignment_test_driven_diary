const moment = require('moment');
const utils = require('../tools/utils');
const fs = require('fs');

class Diary {

    constructor() {
        this.entryList = [];
        this.allTags = [];
    }

    //Store message with correct timestamp and store tag if included in message
    entry(msg, time) {

        if (!time) time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        else time = moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a");

        let tags = utils.checkForTags(msg); //store tags
        if (tags.length != 0) msg = utils.removeTags(msg); //remove tags if exist, only storing message


        let entry = { "msg": msg, "timeStamp": time, "tags": tags };

        this.entryList.push(entry);

        return "# Duly Noted!";
    };

    //Get all messages in an entry
    entries() {
        let allEntries = this.entryList.map(entry => `${entry.timeStamp}  ${entry.msg}`);
        return allEntries;
    };

    //get a list of all tags used
    tags() {

        this.entryList.map(entry => {
            entry.tags.forEach(tag => this.allTags.push(tag));
        });


        //Passing in allTags array to a Set constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
        //All values are now unique using set and converting back to array
        return Array.from(new Set(this.allTags));
    }

    //get messages with the given tag
    entriesWithTag(tagSearch) {
        let entries = [];

        this.entryList.forEach(entry => {
            if (entry.tags.includes(tagSearch)) {
                entries.push(entry.msg);
            }
        });


        return entries;
    }

    date(time) {
        time = moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a");

        let entries = [];

        this.entryList.forEach(entry => {
            if (entry.timeStamp == time) {
                entries.push(entry.msg);
            }
        });

        return entries;
    }

    today() {
        let today = moment().format("DD");
        let entries = [];
        let entryDay;

        this.entryList.forEach(entry => {
            entryDay = moment(entry.timeStamp, "dddd, MMMM Do YYYY, h:mm:ss a").format("DD");
            if (entryDay === today) {
                entries.push(entry.msg);
            }
        });

        return entries;
    }

    search(keyword) {
        let results = [];

        this.entryList.forEach(entry => {
            if (entry.msg.includes(keyword)) {
                results.push(entry.msg);
            }
        });

        return results;
    }

    save(path) {
        fs.writeFileSync(path, JSON.stringify(this.entryList), 'utf-8');
    }

    load(path) {
        if (!fs.existsSync(path)) {
            return;
        }
        else {
            let loadedEntryList = JSON.parse(fs.readFileSync(path, 'utf-8'));
            this.entryList.length = 0;
            this.entryList = loadedEntryList;
        }
    }

};

module.exports = Diary;