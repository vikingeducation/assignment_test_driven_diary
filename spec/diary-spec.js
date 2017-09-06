const Diary = require("../src/diary");
const moment = require('moment');

describe('diary', () => {
    let diary

    beforeEach(() => {
        diary = new Diary();
    });

    describe('entry method', () => {

        it('should store the message passed in', () => {
            diary.entry("Writing first js tests today");
            expect(diary.entryList[0].msg).toEqual("Writing first js tests today");
        });

        it('should take second param date and store with message', () => {
            let date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
            diary.entry("Writing first js tests today", Date.now());
            expect(diary.entryList[0].timeStamp).toEqual(date);
        });


        it('should provide timestamp if none is provided', () => {
            diary.entry("Writing first js tests today");
            expect(diary.entryList[0].timeStamp).toBeTruthy();
        });

        it('should store anytags', () => {
            diary.entry("Writing first js tests today #jasmineTea");
            expect(diary.entryList[0].tags[0]).toEqual('jasmineTea');
        });

    });

    describe('entries method', () => {
        it('should return all entries', () => {
            diary.entry(`test message 1 #hurricane`);
            diary.entry(`test message 2`);
            diary.entry(`test message 3`);
            let time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
            let entryTestMsgs = [`${time}  test message 1`, `${time}  test message 2`, `${time}  test message 3`];

            expect(diary.entries()).toEqual(entryTestMsgs);
        });
    });

    describe('tags method', () => {
        let testTagList;

        beforeEach(() => {

            diary.entry("test message 1 #jasmineTea");
            diary.entry("test message 2 #greenTea");
            diary.entry("test message 3 #blackTea");
            diary.entry("test message 4 #jasmineTea");


            testTagList = ["jasmineTea", "greenTea", "blackTea"];

        });

        it('should return array of tags used in all entries w/o duplicates', () => {
            expect(diary.tags()).toEqual(testTagList);

        });
    });

    describe('getting entries with tag', () => {

        beforeEach(() => {
            diary.entry("test message 1 #jasmineTea");
            diary.entry("test message 2 #greenTea");
            diary.entry("test message 3 #jasmineTea");

        });

        it('should get all entries with a given tag', () => {
            expect(diary.entriesWithTag("jasmineTea")).toEqual(["test message 1", "test message 3"]);
        });
    });

    describe('date method', () => {
        let testDate;

        beforeEach(() => {
            testDate = Date.parse("10/10/10");
            diary.entry("test message 1 #jasmineTea", testDate);
            diary.entry("test message 2 #greenTea", testDate);
            diary.entry("test message 3 #jasmineTea");

        });


        it('should return all entries with given date', () => {
            expect(diary.date(testDate)).toEqual(["test message 1", "test message 2"]);
        });


    });

    describe('today method', () => {
        let testDate;

        beforeEach(() => {
            testDate = Date.now();
            diary.entry("test message 1 #jasmineTea", Date.parse("Tue Aug 12 2017 11:51:30 GMT"));
            diary.entry("test message 2 #greenTea", testDate);
            diary.entry("test message 3 #jasmineTea");
            diary.entry("test message 4 #allTea", Date.parse("Tue Aug 13 2017 1:51:30 GMT"));
        });

        it('should get all entries written today', () => {
            expect(diary.today()).toEqual(["test message 2", "test message 3"]);
        });
    });

    describe('search method', () => {
        it('should return messages containing the keyword', () => {

            diary.entry("test message 2 #greenTea");
            diary.entry("test message 3 #jasmineTea");
            diary.entry("Today I saw the sun for the first time #sun");

            expect(diary.search("message")).toEqual(["test message 2", "test message 3"]);
        });
    });
});