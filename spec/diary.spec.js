const Diary = require('../diary');
const fs = require('fs');

describe("Diary", function() {

  describe('adding entries', function() {
    let diary = new Diary();

    it('without a date', function() {
      const result = diary.entry('Brad is everything to me.');
      expect(result.message).toEqual('Brad is everything to me.');
    });

    // this test works or fails based on the difference of a second
    it('adds an entry with an emoji with implicit date ', function() {
      const result = diary.entry('<3 Braaaaad <3');
      expect(result.createTime).toEqual(new Date());
    });

    it('with date', function() {
      const result = diary.entry(
        'Brad. Brad. Brad. Brad. Brad.',
        Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
      );
      expect(result.createTime).toEqual(
        Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
      );
    });
  });

  describe('entries method', function() {
    let diary = new Diary();

    diary.entry('Brad is everything to me.');
    diary.entry('<3 Braaaaad <3');
    diary.entry('Brad. Brad. Brad. Brad. Brad.', Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));

    it('lists correct number of entries', function() {
      expect(diary.entries.length).toEqual(3);
    });

    it('lists correct order of entries', function() {
      expect(diary.entries[1].message).toEqual('<3 Braaaaad <3');
    })
  });

  describe('tags method', function() {
    let diary = new Diary();

    diary.entry("I'm standing outside Brad's house. #yolo");
    diary.entry("I'm at Brad's window. #yolo");
    diary.entry("OMG. What have I done? #sorrynotsorry");

    it('lists all tags', function() {
      expect(diary.tags).toEqual(['yolo', 'sorrynotsorry']);
    });

    it('lists correct number of entries', function() {
      expect(diary.entries.length).toEqual(3);
    });

    it('lists all entries with tag', function() {
      const results = diary.entriesWithTag('yolo');
      expect(results).toEqual( ["I'm standing outside Brad's house. #yolo", "I'm at Brad's window. #yolo"] );
    })
  });  

  describe('today method', function() {
    let diary= new Diary();

    diary.entry('Brad!', new Date('10/10/2017'));
    diary.entry('Brad, Brad', new Date('10/10/2017'));
    diary.entry('Braaaad!');
    diary.entry('Braaaad, Braaaad');

    it('lists all entries for today', function() {
      expect(diary.today()).toEqual(['Braaaad!', 'Braaaad, Braaaad']);
    });
  });

  describe('date method', function() {
    let diary = new Diary();

    diary.entry('Brad!', new Date('10/10/2017'));
    diary.entry('Brad, Brad', new Date('10/10/2017'));
    diary.entry('Braaaad!', new Date('10/10/2017'));
    diary.entry('Braaaad, Braaaad', new Date('10/26/2017'));

    it('lists all entries for the given date', function() {
      const results = diary.date(new Date('10/10/2017'));
      expect(results).toEqual(['Brad!', 'Brad, Brad', 'Braaaad!']);
    });
  });

  describe('search method', function() {
    let diary = new Diary();

    diary.entry('Today, Brad accidentally touched my hand in the hallway.');
    diary.entry('Brad is a dreamboat. #sigh');
    diary.entry('My dad is sooo annoying.');

    it('lists all entries for the given string', function() {
      const results = diary.search('Brad');
      expect(results).toEqual(['Today, Brad accidentally touched my hand in the hallway.', 'Brad is a dreamboat. #sigh']);
    });
  });

  describe('save method', function() {
    let diary = new Diary();

    diary.entry('Today, Brad accidentally touched my hand in the hallway.');
    diary.entry('Brad is a dreamboat. #sigh');
    diary.entry('My dad is sooo annoying.', Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));

    it('saves entries to a file', function() {
      diary.save('../diary.json');
      let result = JSON.parse(fs.readFileSync('../diary.json', 'utf8'));
      expect(result.entries[0].message).toEqual('Today, Brad accidentally touched my hand in the hallway.');
      expect(result.tags[0]).toEqual('sigh');
    });
  });

  describe('load method', function() {
    it('loads entries from a file', function() {
      let diary = new Diary();

      diary.load('../diary.json');
      expect(diary.entries[2].message).toEqual('My dad is sooo annoying.');
      expect(diary.tags[0]).toEqual('sigh');
    });
  });

});  
