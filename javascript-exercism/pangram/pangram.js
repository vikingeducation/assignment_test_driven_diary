var Pangram = function(str) {
  this.str = str;
};

Pangram.prototype.isPangram = function() {
  // a pangram uses all letters
  var lettersUsed = [];
  this.str.split("").forEach(char => {
    char = char.toLowerCase();

    if (!lettersUsed.includes(char) && char.match(/[a-z]/)) {
      lettersUsed.push(char);
    }
  });
  console.log(lettersUsed);
  return lettersUsed.length == 26;
};

module.exports = Pangram;
