class Pangram {
  constructor(sentence) {
    this.sentence = sentence.toLowerCase();
  }

  isPangram() {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];

    for (let i = 0; i < alphabet.length; i++) {
      if (this.sentence.indexOf(alphabet[i]) === -1) return false;
    }
    return true;
  }
}

module.exports = Pangram;
