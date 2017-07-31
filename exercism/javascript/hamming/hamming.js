function Hamming() {
  this.compute = function(inputOne, inputTwo) {
    if (inputOne.length !== inputTwo.length) {
      throw "DNA strands must be of equal length.";
    }
    let result = 0;
    for (let i = 0; i < inputOne.length; i++) {
      if (inputOne[i] !== inputTwo[i]) {
        result += 1;
      }
    }
    return result;
  };
}

module.exports = Hamming;
