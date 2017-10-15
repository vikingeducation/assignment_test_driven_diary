const Diary = require('../diary');
const fs = require('fs');
const { displayDate } = require('../helpers/date_helper');

beforeEach(() => {
  var diary = new Diary();
});

describe('.entries', () => {
  xit('returns a list of all entries', () => {
    diary.entry('Hello diary!');
    expect(diary.entries().length).toEqual(1);
  });
});

describe('.entry', () => {
  xit('adds an entry', () => {
    diary.entry('Hello diary!');
    expect(diary.entries()[0].message).toEqual('Hello diary!');
  });

  xit("adds an entry with the time/date of it's creation", () => {
    diary.entry('Hello diary!');
    expect(displayDate(diary.entries()[0].date)).toEqual(displayDate(Date.parse(new Date())));
  });

  xit("allows for a date to be added manually", () => {
    var date = Date.parse("Mon, 25 Dec 1995 13:30:00 GMT");
    diary.entry('Hello diary!', date);
    expect(diary.entries()[0].date).toEqual(date);
  });

  xit("saves the tags written in the entry", () => {
    diary.entry('Hello diary! #hello #there');
    expect(diary.entries()[0].tags).toEqual(['hello', 'there']);
  });
});

describe('.tags', () => {
  xit('returns a list of all tags entered in all entries', () => {
    diary.entry('Hello diary! #hello #there');
    diary.entry('Goodbye diary! #seeyou');
    expect(diary.tags()).toEqual(['hello', 'there', 'seeyou']);
  });
});

describe('.entriesWithTag', () => {
  xit('returns a list of all entries with the given tag', () => {
    var entry1 = diary.entry('Hello diary! #hello #there');
    diary.entry('Goodbye diary! #seeyou');
    expect(diary.entriesWithTag('hello')).toEqual([entry1]);
  });
});

describe('.today', () => {
  xit('returns a list of all entries written today', () => {
    var entry1 = diary.entry('Hello diary! #hello #there');
    diary.entry('Goodbye diary! #seeyou', Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
    expect(diary.today()).toEqual([entry1]);
  });
});

describe('.date', () => {
  xit('returns a list of all entries on the given date', () => {
    var entry1 = diary.entry('Hello diary! #hello #there');
    diary.entry('Goodbye diary! #seeyou', Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
    expect(diary.today()).toEqual([entry1]);
  });
});

describe('.search', () => {
  xit('returns a list of all entries with the given search term', () => {
    var entry1 = diary.entry('Hello diary!');
    diary.entry('Goodbye diary!');
    expect(diary.search('Hello')).toEqual([entry1]);
  });
});

describe('.save', () => {
  xit('saves all diary entries to the JSON file', () => {
    diary.entry('Goodbye diary!', Date.parse('5/5/2015'));
    diary.save();
    var expectedJson = { entries: [ { message: 'Goodbye diary!', date: 1430798400000, tags: [] } ] };
    var file = fs.readFileSync('../diary.json', 'utf8');
    var jsonFile = JSON.parse(file);
    expect(jsonFile).toEqual(expectedJson);
  });
});

describe('.load', () => {
  xit('loads all diary entries to the JSON file', () => {
    fs.writeFileSync(JSON.stringify({ entries: [ { message: 'Goodbye diary!', date: 1430798400000, tags: [] } ] }, null, 2));
    diary.load();
    expect(diary.entries()).toEqual([ { message: 'Goodbye diary!', date: 1430798400000, tags: [] } ]);
  });
});
