class Bob {
  hey(inputString) {
    inputString = inputString.trim();
    
    var stringLen = inputString.length;

    if (stringLen === 0) {
      return "Fine. Be that way!";
    }

    if (!isNaN(inputString.slice(0, stringLen - 1))) {
      return "Sure.";
    }

    var lastChar = inputString.charAt(stringLen - 1);

    switch (lastChar) {
      case "?":
        if (this.isCapital(inputString)) {
          return "Whoa, chill out!";
        }
        return "Sure.";
      case "!":
        if (this.isCapital(inputString)) {
          return "Whoa, chill out!";
        }
        return "Whatever.";
      default:
        if (this.lastIsNumber(inputString)) {
          return "Whatever.";
        }
        if (this.isCapital(inputString)) {
          return "Whoa, chill out!";
        }
        return "Whatever.";
    }
  }

  lastIsNumber(inputString) {
    return !isNaN(inputString[0]);
  }

  isCapital(inputString) {
    if (inputString.toUpperCase() === inputString) return true;
  }
}

module.exports = Bob;
