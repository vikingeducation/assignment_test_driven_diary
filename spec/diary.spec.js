const Diary = require('../diary.js');
const diaryObject = require('../diary.json');

describe('Diary', function() {
  let diary;
  beforeEach(function() {
    diary = new Diary(diaryObject);
  });

  describe('.entry', () => {
    it("adds an entry to the user's diary", function() {
      const reply = diary.entry('Brad is everything to me.');
      expect(reply).toEqual('Entry added.');
    });
    it('takes an optional date argument', function() {
      const reply = diary.entry(
        'Brad. Brad. Brad. Brad. Brad.',
        Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
      );
      expect(reply).toEqual('Entry added.');
    });
  });

  describe('.entries', () => {
    it('returns a list of all entries', function() {
      const entries = diary.entries();
      expect(entries).not.toBe(null);
    });
  });

  describe('.tags', () => {
    it('returns a list of all tags', function() {
      diary.entry("I'm standing outside Brad's house #yolo");
      diary.entry("I'm at Brad's window #yolo");
      diary.entry('OMG. What have I done? #sorrynotsorry');
      const tags = diary.tags();
      expect(tags).toEqual(['yolo', 'sorrynotsorry']);
    });
  });

  describe('.entriesWithTag', () => {
    it('returns a list of every entry with the tag', function() {
      const entries = diary.entriesWithTag('yolo');
      expect(entries.length).toBeGreaterThan(1);
    });
  });

  describe('.today', () => {
    it('returns a list of all entries written today', function() {
      const entries = diary.today();
      expect(entries.length).toBeGreaterThan(3);
    });
  });

  describe('.date', () => {
    it('returns a list of all entries written on given date', function() {
      const entries = diary.date(Date.parse('12/25/95'));
      expect(entries.length).toBeGreaterThan(0);
    });
  });

  describe('.search', () => {
    it('returns a list of all entries with given string', function() {
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
    it('loads the diary object stored in given file', function() {
      const dictionary = diary.load('./diary.json');
      expect(dictionary).not.toBe(undefined);
    });
  });
});
