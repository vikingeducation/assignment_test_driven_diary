const fs = require('fs');
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
      const time = new Date();
      expect(result.timestamp).toEqual(time);
    });

    it('accepts an optional date argument', function() {
      const result = diary.entry(
        'Brad. Brad. Brad. Brad. Brad.',
        new Date('8/8/2017')
      );
      const time = new Date('8/8/2017');
      expect(result.timestamp).toEqual(time);
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

  describe('tags method', function() {
    var diary = new Diary();

    it('returns the tag from one entry', function() {
      diary.entry('test method #yolo');
      expect(diary.getTags()).toEqual(['yolo']);
    });

    it('returns multiple tags in the same entry', function() {
      diary.entry('about to land in london #yolo #traveling');
      expect(diary.getTags()).toEqual(['yolo', 'traveling']);
    });

    it('returns multiple tags from different entries', function() {
      diary.entry('final entry for today #nightcap');
      expect(diary.getTags()).toEqual(['yolo', 'traveling', 'nightcap']);
    });
  });

  describe('entries with tags method', function() {
    var diary = new Diary();

    beforeEach(function() {
      diary.entry('First entry #tagged');
      diary.entry('second entry');
      diary.entry('third entry #tagged');
      diary.entry('fourth entry #yolo');
    });

    it('returns multiple entries with the same tag', function() {
      expect(diary.entriesWithTag('tagged').length).toEqual(2);
    });

    it('returns a single entry if it is the only one tagged', function() {
      expect(diary.entriesWithTag('yolo')[0].body).toEqual(
        'fourth entry #yolo'
      );
    });

    it('returns no entries if there are none with the given tag', function() {
      expect(diary.entriesWithTag('tbt')).toEqual([]);
    });
  });

  describe('today method', function() {
    var diary;

    beforeEach(function() {
      diary = new Diary();
    });

    it('returns multiple entries for the target date', function() {
      diary.entry('First entry', new Date('8/15/2017'));
      diary.entry('second entry', new Date('8/15/2017'));
      diary.entry('third entry', new Date());
      diary.entry('fourth entry', new Date());
      expect(diary.today().length).toEqual(2);
    });

    it('returns no entires if there are none for the target date', function() {
      diary.entry('First entry', new Date('8/15/2017'));
      diary.entry('second entry', new Date('8/15/2017'));
      diary.entry('third entry', new Date('1/1/2016'));
      diary.entry('fourth entry', new Date('8/5/2017'));
      expect(diary.today().length).toEqual(0);
    });
  });

  describe('date method', function() {
    var diary;

    beforeEach(function() {
      diary = new Diary();
    });

    it('returns multiple entries for the target date', function() {
      diary.entry('First entry', new Date('8/15/2017'));
      diary.entry('second entry', new Date('8/15/2017'));
      diary.entry('third entry', new Date('8/15/2017'));
      diary.entry('fourth entry', new Date('8/16/2017'));
      expect(diary.date(new Date('8/15/2017')).length).toEqual(3);
    });

    it('returns no entires if there are none for the target date', function() {
      diary.entry('First entry', new Date('8/15/2017'));
      diary.entry('second entry', new Date('8/15/2017'));
      diary.entry('third entry', new Date('8/15/2017'));
      diary.entry('fourth entry', new Date('8/16/2017'));
      expect(diary.date(new Date('1/1/2015')).length).toEqual(0);
    });
  });

  describe('search method', function() {
    var diary = new Diary();
    diary.entry('Flying to Barcelona!');
    diary.entry('Leaving London');
    diary.entry('London was fun!');

    it('returns multiple entries that contain the search term', function() {
      expect(diary.search('London').length).toEqual(2);
    });

    it('returns nothing if no entries contain the search term', function() {
      expect(diary.search('pizza').length).toEqual(0);
    });
  });

  describe('save method', function() {
    var diary = new Diary();

    it('saves a diary with one message to a file', function() {
      diary.entry('Flying to Paris!');
      diary.save('./diary.json');
      let result = JSON.parse(fs.readFileSync('diary.json', 'utf8'));
      expect(result.entries[0]['body']).toEqual('Flying to Paris!');
    });

    it('saves a diary with multiple messages to a file', function() {
      diary.entry('Flying back to SFO next week #travel');
      diary.entry('But first, time in Paris!');
      diary.save('./diary.json');
      let result = JSON.parse(fs.readFileSync('diary.json', 'utf8'));
      expect(result.entries[2]['body']).toEqual('But first, time in Paris!');
    });

    it('saves tags to the file', function() {
      let result = JSON.parse(fs.readFileSync('diary.json', 'utf8'));
      expect(result.tags[0]).toEqual('travel');
    });
  });

  describe('load method', function() {
    beforeEach(function() {
      var diary = new Diary();
      diary.entry('I like pate. #food');
      diary.entry('And burgundy #wine');
      diary.save('./diary.json');
    });

    it('loads multiple entries from a file', function() {
      let testDiary = new Diary();
      testDiary.load('diary.json');
      expect(testDiary.entries[1]['body']).toEqual('And burgundy #wine');
    });

    it('retains tags', function() {
      let testDiary = new Diary();
      testDiary.load('diary.json');
      expect(testDiary.tags.length).toEqual(2);
    });
  });
});
