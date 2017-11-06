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
  })
})
