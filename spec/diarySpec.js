const Diary = require('../src/diary.js');

describe('When we make a diary entry', function() {
  let diary, d;

  beforeEach(function() {
    diary = new Diary();
    d = diary.getFormattedDate();
  });

  it('adds an entry to current diary with date appended', function() {
    expect(diary.entry(`Brad is everything to me!`)).toEqual({
      body: 'Brad is everything to me!',
      date: `${d}`
    });
  });

  it('adds an entry to current diary with a date argument', function() {
    var d = 'January at 4PM';
    expect(diary.entry(`Brad is everything to me!`, d)).toEqual({
      body: 'Brad is everything to me!',
      date: 'January at 4PM'
    });
  });
});

describe('When we want to view diary entries', function() {
  beforeEach(function() {
    diary = new Diary();
    d = diary.getFormattedDate();
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window #yolo");
    diary.entry('OMG. What have I done? #sorrynotsorry', '04/03/2017');
  });

  it('should return all entries', function() {
    expect(diary.entries()).toEqual([
      { body: `I'm standing outside Brad's house #yolo`, date: `${d}` },
      { body: `I'm at Brad's window #yolo`, date: `${d}` },
      { body: `OMG. What have I done? #sorrynotsorry`, date: `04/03/2017` }
    ]);
  });

  it('we can see all tags', function() {
    expect(diary.tags()).toEqual(['yolo', 'sorrynotsorry']);
  });

  it('should return every entry with given tag', function() {
    expect(diary.entriesWithTag('yolo')).toEqual([
      { body: `I'm standing outside Brad's house #yolo`, date: `${d}` },
      { body: `I'm at Brad's window #yolo`, date: `${d}` }
    ]);
  });

  it('should return all entries written today', function() {
    expect(diary.today()).toEqual([
      { body: `I'm standing outside Brad's house #yolo`, date: `${d}` },
      { body: `I'm at Brad's window #yolo`, date: `${d}` }
    ]);
  });

  it('should return all entries written on given date', function() {
    expect(diary.date('04/03/2017')).toEqual([
      { body: `OMG. What have I done? #sorrynotsorry`, date: `04/03/2017` }
    ]);
  });

  it('should return all entries containing given string'), function() {
    expect(diary.search('Brad')).toEqual([
      { body: `I'm standing outside Brad's house #yolo`, date: `${d}` },
      { body: `I'm at Brad's window #yolo`, date: `${d}` }
    ]);
  };
});

describe('When we want to manage data', function() {
  const fs = require("fs");

  beforeEach(function() {
    diary = new Diary();
    d = diary.getFormattedDate();
    diary.entry("I'm standing outside Brad's house #yolo", "04/03/2017");
  });

  it('should save all current entries to a provided location', function() {
    diary.save('./.diary')
    const diaryFile = require('../.diary')
    expect(diaryFile).toBe("I'm standing outside Brad's house #yolo");
  })

})
