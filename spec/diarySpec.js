const Diary = require('../src/diary.js');


describe('Diary entry', function() {
  let diary, d;

  beforeEach(function() {
    diary = new Diary();
    d = new Date().toString()
  });
  
  it('adds an entry to current diary with date appended', function() {
    expect(diary.entry(`Brad is everything to me!`)).toBe(
      `Brad is everything to me! ~Written on ${d}`
    );
  });
  
  it('may take a date argument', function() {
    var d = 'January at 4PM';
    expect(diary.entry(`Brad is everything to me!`, d)).toBe(
      `Brad is everything to me! ~Written on January at 4PM`
    );
  });

  it('diary.entries to return all entries', function() {
    diary.entry('I love cats!');
    diary.entry('Now I hate cats :(');
    diary.entry('Horses are soooo cute');
    expect(diary.entries()).toEqual([
      `I love cats! ~Written on ${d}`,
      `Now I hate cats :( ~Written on ${d}`,
      `Horses are soooo cute ~Written on ${d}`
    ]);
  });

  it('should return all tags with diary.tags', function() {
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window #yolo");
    diary.entry("OMG. What have I done? #sorrynotsorry");
    expect(diary.tags()).toEqual([
      'yolo',
      'sorrynotsorry'
    ])
  })
});

