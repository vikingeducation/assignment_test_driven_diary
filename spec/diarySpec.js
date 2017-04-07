const Diary = require('../src/diary.js');

beforeEach(function() {
  var diary = new Diary();
});

describe('Diary entry', function() {
  it('adds an entry to current diary with date appended', function() {
    var d = new Date().toString();
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

  it('diary.entry to return all entries', function() {
    diary.entry('I love cats!');
    diary.entry('Now I hate cats :(');
    diary.entry('Horses are soooo cute');

    //array of entries
    expect(diary.entries()).toBe(``);
  });
});

// describe('Pangram()', function() {
//   it('empty sentence', function() {
//     var pangram = new Pangram('');
//     expect(pangram.isPangram()).toBe(false);
//   });
