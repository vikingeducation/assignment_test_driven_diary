const Diary = require('../lib/diary');

describe('Diary', () => {
  let diary;

  beforeEach( () => {
    diary = new Diary();
  });

  describe('.entry', () => {
    it('creates a new diary entry item', () => {
      diary.entry('Deven is so cool.', Date.parse("Mon, 25 Dec 1995 13:30:00 GMT"));
      expect(diary.entryItems[0]).toEqual({
        text: 'Deven is so cool.',
        date: 819898200000
      })
    });
  });

});
