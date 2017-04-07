var Pangram = function(str) {
  this.str = str;
};

Pangram.prototype.isPangram = function() {
  // a pangram uses all letters
  var lettersUsed = [];
  this.str.split('').forEach((char) => {
    char = char.toLowerCase();
    if(!lettersUsed.include(char)){
      lettersUsers.push(char)
    }
  })
  return lettersUsed.length == 26;

};

module.exports = Pangram;
