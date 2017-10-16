const Diary = require('../diary');
const fs = require('fs');
const { displayDate } = require('../helpers/date_helper');
process.env.envType = 'test';

describe('Diary', () => {
  var diary;

  beforeEach(() => {
    diary = new Diary();
  });

  afterEach(() => {
    fs.writeFileSync('./spec/support/test_diary.json', '');
  });

  describe('.entries', () => {
    it('returns a list of all entries', () => {
      diary.entry('Hello diary!');
      expect(diary.entries().length).toEqual(1);
    });
  });

  describe('.entry', () => {
    it('adds an entry', () => {
      diary.entry('Hello diary!');
      expect(diary.entries()[0].message).toEqual('Hello diary!');
    });

    it("adds an entry with the time/date of it's creation", () => {
      diary.entry('Hello diary!');
      var date = diary.entries()[0].date;
      expect(date.split(' ')[0]).toEqual(displayDate(new Date()));
    });

    it("allows for a date to be added manually", () => {
      var date = Date.parse("Mon, 25 Dec 1995");
      diary.entry('Hello diary!', "Mon, 25 Dec 1995");
      var entryDate = diary.entries()[0].date;
      var dateWithoutTime = entryDate.split(' ')[0];
      expect(Date.parse(dateWithoutTime)).toEqual(date);
    });

    it("saves the tags written in the entry", () => {
      diary.entry('Hello diary! #hello #there');
      expect(diary.entries()[0].tags).toEqual(['hello', 'there']);
    });
  });

  describe('.tags', () => {
    it('returns a list of all tags entered in all entries', () => {
      diary.entry('Hello diary! #hello #there');
      diary.entry('Goodbye diary! #seeyou');
      expect(diary.tags()).toEqual(['hello', 'there', 'seeyou']);
    });
  });

  describe('.entriesWithTag', () => {
    it('returns a list of all entries with the given tag', () => {
      diary.entry('Hello diary! #hello #there');
      diary.entry('Goodbye diary! #seeyou');
      expect(diary.entriesWithTag('hello')).toEqual([diary.entries()[0]]);
    });
  });

  describe('.today', () => {
    it('returns a list of all entries written today', () => {
      diary.entry('Hello diary! #hello #there');
      diary.entry('Goodbye diary! #seeyou', "Mon, 25 Dec 1995 13:30:00 GMT");
      expect(diary.today()).toEqual([diary.entries()[0]]);
    });
  });

  describe('.date', () => {
    it('returns a list of all entries on the given date', () => {
      diary.entry('Hello diary! #hello #there');
      diary.entry('Goodbye diary! #seeyou', "Mon, 25 Dec 1995 13:30:00 GMT");
      expect(diary.date("Mon, 25 Dec 1995 13:30:00 GMT")).toEqual([diary.entries()[1]]);
    });
  });

  describe('.search', () => {
    it('returns a list of all entries with the given search term', () => {
      diary.entry('Hello diary!');
      diary.entry('Goodbye diary!');
      expect(diary.search('Hello')).toEqual([diary.entries()[0]]);
    });

    it('returns the case insensitive list with the given search term', () => {
      diary.entry('Hello diary!');
      diary.entry('Goodbye diary!');
      expect(diary.search('hello')).toEqual([diary.entries()[0]]);
    });
  });

  describe('.save', () => {
    it('saves all diary entries to the JSON file', () => {
      diary.entry('Goodbye diary!', '5/5/2015');
      diary.save();
      var expectedJson = { entries: [ { message: 'Goodbye diary!', date: '5/5/2015 12:00:00 AM', tags: [] } ] };
      var file = fs.readFileSync('./spec/support/test_diary.json', 'utf8');
      var jsonFile = JSON.parse(file);
      expect(jsonFile).toEqual(expectedJson);
    });
  });

  describe('.load', () => {
    it('loads all diary entries to the JSON file', () => {
      fs.writeFileSync('./spec/support/test_diary.json', JSON.stringify({ entries: [ { message: 'Goodbye diary!', date: 1430798400000, tags: [] } ] }, null, 2));
      diary.load();
      expect(diary.entries()).toEqual([ { message: 'Goodbye diary!', date: 1430798400000, tags: [] } ]);
    });
  });
});
