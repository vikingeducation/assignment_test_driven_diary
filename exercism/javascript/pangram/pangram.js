class Pangram {
  constructor(testCase) {
    this.testCase = testCase.toLowerCase();
    this.corpus = new Set("thequickbrownfoxjumpsoverthelazydog");
  }
  isPangram() {
    this.testCase.split("").forEach(letter => {
      this.corpus.delete(letter);
    });
    return this.corpus.size === 0;
  }
}

module.exports = Pangram;
