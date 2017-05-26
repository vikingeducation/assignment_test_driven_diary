const Diary = require('../lib/diary');
const fs = require('fs');

describe('Diary', () => {
  let diary;

  beforeEach(() => {
    diary = new Diary();
  });

  afterEach(() => {
    if (fs.existsSync(".diary")) {
      fs.unlinkSync(".diary");
    }
    if (fs.existsSync(".testDiary")) {
      fs.unlinkSync(".testDiary");
    }
  });

  it('saves a diary entry', () => {
    expect(diary.entry('Today I ate with the birdmen.')).toEqual('Duly Noted!');
  });

  it('saves a diary entry with date', () => {
    expect(diary.entry('Today I ate with the birdmen.', Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")))
      .toEqual('Duly Noted!');
  });

  it('returns all diary entries', () => {
    diary.entry('Today I ate with the birdmen.');

    expect(diary.entries()).toEqual(["Today I ate with the birdmen.\nDate: none"]);
  });

  it('returns all diary entries with dates', () => {
    diary.entry('Today I ate with the birdmen.');
    diary.entry('They have taken me in as one of their own.', Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));

    expect(diary.entries())
      .toEqual([
        'Today I ate with the birdmen.\nDate: none', 
        'They have taken me in as one of their own.\nDate: 819898200000'
      ]);
  });

  it('returns tags in diary', () => {
    diary.entry("They mainly eat worms, which they've convinced me to also eat #exvegetarian");
    diary.entry("They constantly talk about their war with the mudmen #mudmen");
    diary.entry("I wonder if I can meet these mudmen within my studies soon #mudmen");

    expect(diary.tags()).toEqual(['exvegetarian', 'mudmen']);
  });

  it('return a list of every entry with the given tag', () => {
    diary.entry("They mainly eat worms, which they've convinced me to also eat #exvegetarian");
    diary.entry("They constantly talk about their war with the mudmen #mudmen");
    diary.entry("I wonder if I can meet these mudmen within my studies soon #mudmen");

    expect(diary.entriesWithTag('mudmen'))
      .toEqual([
        "They constantly talk about their war with the mudmen #mudmen",
        "I wonder if I can meet these mudmen within my studies soon #mudmen"
      ]);
  });

  it('returns a list of all entries written today', () => {
    diary.entry('It all started today. The birdmen came from the sky, as if from a nightmare long forgotten.', Date.parse('12/11/2001'));
    diary.entry('The mudmen apparently threw the first stone in this ageless war, and they descended from humans.', Date.now());
    diary.entry('This is why they have taken us captive. I am one of the few to have ever spoken with them directly.', Date.now());

    expect(diary.today())
      .toEqual([
        'The mudmen apparently threw the first stone in this ageless war, and they descended from humans.',
        'This is why they have taken us captive. I am one of the few to have ever spoken with them directly.'
      ]);
  });

  it('returns a list of entries written on the given date', () => {
    diary.entry('This was the last day of quiet humanity ever knew.', Date.parse('12/10/2001'));
    diary.entry('It all started today. The birdmen came from the sky, as if from a nightmare long forgotten.', Date.parse('12/11/2001'));
    diary.entry("Those who lived wished they hadn't. Such horrors mankind had not saw since the Chimera Wars", Date.parse('12/11/2001'));
    diary.entry("They had enslaved tens of thousands of us within the first day.", Date.parse('12/12/2001'));
    diary.entry('The mudmen apparently threw the first stone in this ageless war, and they descended from humans.', Date.now());

    expect(diary.date(Date.parse('12/11/2001')))
      .toEqual([
        'It all started today. The birdmen came from the sky, as if from a nightmare long forgotten.',
        "Those who lived wished they hadn't. Such horrors mankind had not saw since the Chimera Wars"
      ]);
  });

  it('returns a list of all notes with the given string', () => {
    diary.entry("They mainly eat worms, which they've convinced me to also eat");
    diary.entry("They constantly talk about their war with the mudmen");
    diary.entry("I wonder if I can meet these mudmen within my studies soon");

    expect(diary.search('mudmen')).toEqual([
      "They constantly talk about their war with the mudmen",
      "I wonder if I can meet these mudmen within my studies soon"
    ]);
  });

  it('should save the diary to a file', () => {
    diary.entry("I wonder if I can meet these mudmen within my studies soon.");
    diary.save("./.diary");
    expect(fs.readFileSync(".diary", "utf8")).toEqual('{"Entries":[{"message":"I wonder if I can meet these mudmen within my studies soon.","date":"none"}],"Tags":{}}');
  });

  it('should load a diary with saved entries', () => {
    fs.writeFileSync('./.testDiary', '{"Entries":[{"message":"They constantly talk about their war with the mudmen","date":"none"}]}');
    diary.load('./.testDiary');
    expect(diary.entries()).toEqual(['They constantly talk about their war with the mudmen\nDate: none']);
  });
});