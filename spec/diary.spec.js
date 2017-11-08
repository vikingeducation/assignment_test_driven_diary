const Diary = require('../diary.js');

describe('Diary', function() {
  let diary = new Diary();
  beforeEach(function() {
    diary.load('./diary.json');
  });

  afterEach(function() {
    diary.save('./diary.json');
  });

  describe('.entry', () => {
    xit("adds an entry to the user's diary", function() {
      const reply = diary.entry('Brad is everything to me.');
      expect(reply).toEqual('Entry added.');
    });
    xit('takes an optional date argument', function() {
      const reply = diary.entry(
        'Brad. Brad. Brad. Brad. Brad.',
        Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
      );
      expect(reply).toEqual('Entry added.');
    });
  });

  describe('.entries', () => {
    xit('returns a list of all entries', function() {
      const entries = diary.entries();
      console.log(entries);
      expect(entries).not.toBe(null);
    });
  });

  describe('.tags', () => {
    xit('returns a list of all tags', function() {
      diary.entry("I'm standing outside Brad's house #yolo");
      diary.entry("I'm at Brad's window #yolo");
      diary.entry('OMG. What have I done? #sorrynotsorry');
      const tags = diary.tags();
      expect(tags).toEqual(['yolo', 'sorrynotsorry']);
    });
  });

  describe('.entriesWithTag', () => {
    xit('returns a list of every entry with the tag', function() {
      const entries = diary.entriesWithTag('yolo');
      expect(entries.length).toBeGreaterThan(1);
    });
  });

  describe('.today', () => {
    xit('returns a list of all entries written today', function() {
      const entries = diary.today();
      expect(entries.length).toBeGreaterThan(3);
    });
  });

  describe('.date', () => {
    xit('returns a list of all entries written on given date', function() {
      const entries = diary.date(Date.parse('12/25/95'));
      expect(entries.length).toBeGreaterThan(0);
    });
  });

  describe('.search', () => {
    xit('returns a list of all entries with given string', function() {
      diary.entry('Today, Brad accidentally touched my hand in the hallway.');
      diary.entry('Brad is a dreamboat.');
      diary.entry('My dad is sooo annoying.');
      const entries = diary.search('Brad');
      expect(entries.length).toBeGreaterThan(5);
    });
  });

  describe('.save', () => {
    xit('persists the current state of diary to given file', function() {
      const reply = diary.save('./diary.json');
      expect(reply).toEqual('Diary saved.');
    });
  });

  describe('.load', () => {
    xit('loads the diary object stored in given file', function() {
      const diaryObj = diary.load('./diary.json');
      expect(diaryObj).not.toBe(undefined);
    });
  });
});
