class Bob {
  hey(message) {
    if (
      message.toUpperCase() === message &&
      message.replace(/[a-z]/gi, "") !== message
    ) {
      return "Whoa, chill out!";
    } else if (message.replace(/[\t\ ]/gi, "").slice(-1) === "?") {
      return "Sure.";
    } else if (
      message.length === 0 ||
      message.replace(/[\s]/gi, "").length === 0
    ) {
      return "Fine. Be that way!";
    }
    return "Whatever.";
  }
}

module.exports = Bob;
