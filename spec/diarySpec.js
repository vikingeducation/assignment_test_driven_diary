var Diary = require('./diary');

describe('#entry', function () {
  var diary = new Diary();

  xit("adds an entry to the user's diary", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });

  xit("contains the create date/time", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });

  xit("takes an optional date argument", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });
}// #entry

describe('#entries', function () {
  var diary = new Diary();

  xit("returns a list of all entries", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });
}// #entries

describe('#tags', function () {
  var diary = new Diary();

  xit("returns a list of all tags", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });
}// #tags

describe('#entriesWithTag', function () {
  var diary = new Diary();

  xit("returns a list of all entries with tag 'yolo'", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });
}// #entriesWithTag

describe('#today', function () {
  var diary = new Diary();

  xit("returns a list of all entries written today", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });
}// #today

describe('#date', function () {
  var diary = new Diary();

  xit("returns a list of all entries written on the given date", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });
}// #date


describe('#search', function () {
  var diary = new Diary();

  xit("returns a list of all notes with the given string", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });
}// #search

describe('#save', function () {
  var diary = new Diary();

  xit("persists the current state of the diary the given file", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });
}// #save

describe('#load', function () {
  var diary = new Diary();

  xit("loads the the diary object with the entries stored in the given file", function () {
    expect(diary.key).toMatch(/^[a-z]+$/);
  });
}// #load



  // it('can encode', function () {
  //   expect(cipher.encode('aaaaaaaaaa')).toEqual(cipher.key.substr(0, 10));
  // });

  // xit('can decode', function () {
  //   expect(cipher.decode(cipher.key.substr(0, 10))).toEqual('aaaaaaaaaa');
  // });

  // xit('is reversible', function () {
  //   var plaintext = 'abcdefghij';
  //   expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
  // });

  // it('throws an error with an all caps key', function () {
  //   expect( function () {
  //     new Cipher('ABCDEF');
  //   }).toThrow(new Error('Bad key'));
  // });

