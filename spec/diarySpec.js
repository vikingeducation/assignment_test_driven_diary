const Diary = require('../index');

describe('Check all the behaviours of the diary', () => {
  describe('A simple Entry', () => {
    let diary = new Diary();

    it('it allows a single entry', () => {
      diary.entry("1st entry");
      const results = diary.entries
      expect(results).toEqual(['1st entry'])
    })
  })
})
