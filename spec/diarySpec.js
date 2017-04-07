const Diary = require('../src/diary.js');

describe('When we make a diary entry', function() {
  let diary, d;

  beforeEach(function() {
    diary = new Diary();
    d = new Date().toString();
  });

  it('adds an entry to current diary with date appended', function() {
    expect(diary.entry(`Brad is everything to me!`)).toBe(
      `Brad is everything to me!`
    );
  });

  it('adds an entry to current diary with a date argument', function() {
    var d = 'January at 4PM';
    expect(diary.entry(`Brad is everything to me!`, d)).toBe(
      `Brad is everything to me! ~Written on January at 4PM`
    );
  });
});

describe('When we want to view diary entries', function() {
  beforeEach(function() {
    diary = new Diary();
    d = new Date().toString();
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window #yolo");
    diary.entry('OMG. What have I done? #sorrynotsorry');
  });

  it('should return all entries', function() {
    expect(diary.entries()).toEqual([
      `I'm standing outside Brad's house #yolo`,
      `I'm at Brad's window #yolo`,
      `OMG. What have I done? #sorrynotsorry`
    ]);
  });

  it('should return all tags', function() {
    expect(diary.tags()).toEqual(['yolo', 'sorrynotsorry']);
  });

  it('should return every entry with given tag', function() {
    expect(diary.entriesWithTag('yolo')).toEqual([
      `I'm standing outside Brad's house #yolo ~Written on ${d}`,
      `I'm at Brad's window #yolo ~Written on ${d}`
    ]);
  });

  it('should return all entries written today', function() {
    expect(diary.today()).toEqual(['yolo', 'sorrynotsorry']);
  });
});
