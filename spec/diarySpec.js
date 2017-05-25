const Diary = require('../lib/diary');

describe('Diary', () => {
  // let diary;

  // beforeEach(() => {
  //   diary = new Diary();
  // });

  it('saves a diary entry', () => {
    let diary = new Diary();
    expect(diary.entry('Today I ate with the birdmen.')).toEqual('Duly Noted!');
  });

  it('saves a diary entry with date', () => {
    let diary = new Diary();
    expect(diary.entry('Today I ate with the birdmen.', Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")))
      .toEqual('Duly Noted!');
  });

  it('returns all diary entries', () => {
    let diary = new Diary();
    diary.entry('Today I ate with the birdmen.');
    expect(diary.entries()).toEqual(["Today I ate with the birdmen.\nDate: none"]);
  });

  it('returns all diary entries with dates', () => {
    let diary = new Diary();
    diary.entry('Today I ate with the birdmen.');
    diary.entry('They have taken me in as one of their own.', Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
    expect(diary.entries())
      .toEqual([
        'Today I ate with the birdmen.\nDate: none', 
        'They have taken me in as one of their own.\nDate: 819898200000'
      ]);
  });
});