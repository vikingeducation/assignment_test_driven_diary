class DnaTranscriber {
  toRna(dnaString) {
    var outputString = "";

    for (var i = 0; i < dnaString.length; i++) {
      switch (dnaString.charAt(i)) {
        case "C":
          outputString += "G";
          break;
        case "G":
          outputString += "C";
          break;
        case "A":
          outputString += "U";
          break;
        case "T":
          outputString += "A";
          break;
        default:
          throw new Error("Invalid input");
      }
    }
    return outputString;
  }
}

module.exports = DnaTranscriber;
