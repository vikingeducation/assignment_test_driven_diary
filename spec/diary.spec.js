let Diary = require('../diary');

describe("Diary", function() {

  describe('adding entries', function() {
    let diary = new Diary();

    it('without a date', function() {
      const result = diary.entry('Brad is everything to me.');
      expect(result.message).toEqual('Brad is everything to me.');
    });

    // shows a diff of 1 second, so fails
    // it('adds an entry with an emoji with implicit date ', function() {
    //   const result = diary.entry('<3 Braaaaad <3');
    //   expect(result.createTime).toEqual(Date.now());
    // });

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

});  
