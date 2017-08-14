var Diary = require('../diary');

describe('behavior of the diary', function() {
  describe('the entry method', function() {
    var diary = new Diary();

    it('allows for the creation of a new entry', function() {
      const result = diary.entry('I want pizza.');
      expect(result.body).toEqual('I want pizza.');
    });

    it('saves the current datetime to a timestamp', function() {
      const result = diary.entry('Now I want ice cream.');
      const time = Date.now();
      expect(result.timestamp).toEqual(time);
    });

    it('accepts an optional date argument', function() {
      const result = diary.entry(
        'Brad. Brad. Brad. Brad. Brad.',
        Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
      );
      const time = Date.now();
      expect(result.timestamp).toEqual(
        Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
      );
    });
  });

  describe('the entries method', function() {
    var diary = new Diary();

    beforeEach(function() {
      diary.entry('First entry');
      diary.entry('second entry');
      diary.entry('third entry');
    });

    it('returns a list of all entries', function() {
      expect(diary.entries.length).toEqual(3);
    });

    it('returns the entries in the correct order', function() {
      expect(diary.entries[1].body).toEqual('second entry');
    });
  });

  describe('tags method', function() {});

  describe('entries with tags method', function() {});

  describe('today method', function() {});

  describe('date method', function() {});

  describe('search method', function() {});

  describe('save method', function() {});

  describe('load method', function() {});
});
