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
  // describe('.load', path => {});
});
