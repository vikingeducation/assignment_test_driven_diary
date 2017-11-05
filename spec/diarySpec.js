const Diary = require('../src/index.js');
const fs = require('fs');


describe('Diary', () => {
  let diary;

  beforeEach(() => {
    diary = new Diary();
  });

  describe('.entry', () => {
    it('adds an entry without a date into the user\'s diary', () => {
      let result = diary.entry('Brad is everything to me.');
      expect(result).toEqual('Brad is everything to me.');
    });

    it('adds an entry with a date into the user\'s diary', () => {
      let result = diary.entry('<3 Braaaad <3', Date.parse('Mon, 25 Dec 1995 13:30:00 GMT'));
      expect(result).toEqual(Date.parse('Mon, 25 Dec 1995 13:30:00 GMT'));
    });
  });

  describe('.entries', () => {
    it('returns all the entries in the diary', () => {
      diary.entry('Brad is everything to me.');
      diary.entry('<3 Braaaad <3', Date.parse('Mon, 25 Dec 1995 13:30:00 GMT'));
      let result = diary.entries();
      expect(result.length).toEqual(2);
    });
  });

  describe('.tags', () => {
    it('returns the words after the # for each diary entry', () => {
      diary.entry('Brad is everything to me.');
      diary.entry("I'm standing outside Brad's house #yolo");
      diary.entry("I'm at Brad's window #yolo");
      diary.entry("OMG. What have I done? #sorrynotsorry");
      let result = diary.tags();
      expect(result).toEqual(['yolo', 'sorrynotsorry']);
    })
  });

  describe('.entriesWithTag', () => {
    it('returns all entries in diary with the selected tag', () => {
      diary.entry('Brad is everything to me.');
      diary.entry("I'm standing outside Brad's house #yolo");
      diary.entry("I'm at Brad's window #yolo");
      diary.entry("OMG. What have I done? #sorrynotsorry");
      let result = diary.entriesWithTag('yolo');
      expect(result.length).toEqual(2);
    });
  });

  describe('.search', () => {
    it('returns all entries with the given search string', () => {
      diary.entry("Today, Brad accidentally touched my hand in the hallway.");
      diary.entry("Brad is a dreamboat.");
      diary.entry("My dad is sooo annoying.");
      let result = diary.search('Brad');
      expect(result.length).toEqual(2)
    });
  });

  describe('.save', () => {
    it('saves the current state of the diary into selected file', () => {
      diary.entry("Today, Brad accidentally touched my hand in the hallway.");
      diary.entry("Brad is a dreamboat.");
      diary.entry("My dad is sooo annoying.");

      diary.save('./src/diary.json');
      const JSONcontents = fs.readFileSync('./src/diary.json', 'utf8');
      const contents = JSON.parse(JSONcontents);
      expect(contents.logs[0].log).toEqual("Today, Brad accidentally touched my hand in the hallway.")
      expect(contents.logs[1].log).toEqual("Brad is a dreamboat.")
      expect(contents.logs[2].log).toEqual("My dad is sooo annoying.")
    });
  });

  describe('.load', () => {
    it('loads the diary object with data from the given file', () => {
      const JSONcontents = fs.readFileSync('./src/diary.json', 'utf8');
      const contents = JSON.parse(JSONcontents);

      diary.logs = contents.logs;
      expect(diary.logs[0].log).toEqual("Today, Brad accidentally touched my hand in the hallway.");
      expect(diary.logs[1].log).toEqual("Brad is a dreamboat.");
      expect(diary.logs[2].log).toEqual("My dad is sooo annoying.");
    });
  })


});
