const Diary = require("../src/diary");

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
            let date = Date();
            diary.entry("Writing first js tests today", date);
            expect(diary.entryList[0].timeStamp).toEqual(date);
        });


        it('should provide timestamp if none is provided', () => {
            diary.entry("Writing first js tests today");
            expect(diary.entryList[0].timeStamp).toBeTruthy();
        });

        it('should store anytags', () => {
            diary.entry("Writing first js tests today #jasmineTea");
            expect(diary.entryList[0].tags[0]).toEqual('#jasmineTea');
        });

    });

    describe('entries method', () => {
        it('should return all entries', () => {
            diary.entry("test message 1");
            diary.entry("test message 2");
            diary.entry("test message 3");

            let entryTestMsgs = ["test message 1", "test message 2", "test message 3"];

            expect(diary.entries).toEqual(entryTestMsgs);
        });
    });

    describe('tags method', () => {
        beforeEach(() => {

            diary.entry("test message 1 #jasmineTea");
            diary.entry("test message 2 #greenTea");
            diary.entry("test message 3 #blackTea");
            diary.entry("test message 4 #jasmineTea");
            

            let testTagList = ["jasmineTea", "greenTea", "blackTea"];

        });

        it('should return array of tags used in all entries w/o duplicates', () => {
            expect(diary.tags).toEqual(testTagList);

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
});