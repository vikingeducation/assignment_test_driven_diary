const Diary = require('../index');

describe('Check all the behaviours of the diary', () => {
  describe('A simple Entry with date', () => {


    it('it allows a single entry', () => {
      let diary = new Diary();
      diary.entry("1st entry");
      const results = diary.entries
      expect(results).toEqual(['1st entry'])
    });
    it('it allows a single entry with a timestamp', () => {
      let diary = new Diary();
      let time = Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
      diary.entry("Brad. Brad. Brad. Brad. Brad.", time);
      const results = diary.entries
      console.log(results)
      expect(results[0].date).toEqual(time)
    });
    it('should print out all the entries', () => {
      let diary = new Diary();
      diary.entry("1st entry");
      diary.entry("2nd entry");
      const results = diary.entries
      expect(results).toEqual(['1st entry', '2nd entry'])
    });
  })
  describe('Searching the diary', () => {
    let diary = new Diary();
    diary.entry("I'm standing outside Brad's house #yolo");
    diary.entry("I'm at Brad's window #yolo");
    diary.entry("OMG. What have I done? #sorrynotsorry");
    diary.entry("fast", 2)
    diary.entry("slow", 2)

    it('it can retrieve the list of tags', () => {
      let results = diary.tags()
      expect(results).toEqual(["yolo", "sorrynotsorry"])
    });
    it('it can retrieve entries with tags', () => {
      let results = diary.entriesWithTag("yolo")
      expect(results).toEqual(["I'm standing outside Brad's house #yolo", "I'm at Brad's window #yolo"])
    });
    it('it can retrieve entries with today\'s date', () => {
      let todayDiary = new Diary()
      let todayDate = Date.now()
      todayDiary.entry("z", todayDate)
      todayDiary.entry("s", todayDate)
      todayDiary.entry("b", 23)
      let results = todayDiary.today()
      expect(results).toEqual(["z", "m"])
    });
    it('it can retrieve entries with a specific date', () => {

      let results = diary.date(2)
      expect(results).toEqual(["fast", "slow"])
    });
    it('it can retrieve entries that contains a string', ()=> {
      let search = new Diary();
      search.entry("milo is cool");
      search.entry("milo is the best");
      search.entry("no one")
      let results = search.search("milo");
      expect(results).toEqual(["milo is cool", "milo is the best"])
    })
  })
})
