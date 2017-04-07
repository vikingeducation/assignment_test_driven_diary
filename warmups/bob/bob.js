class Bob {
  hey(inputString) {
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
        if (this.isCapital(inputString)) {
          return "Whoa, chill out!";
        }
        return "Whatever.";
    }
  }

  isCapital(inputString) {
    if (inputString.toUpperCase() === inputString) return true;
  }
}

module.exports = Bob;
