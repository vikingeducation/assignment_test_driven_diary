var Bob = function(str) {
  this.str = str;
};

Bob.prototype.hey = function(str) {
  if (str.trim() === "") {
    return "Fine. Be that way!";
  } else if (str[str.length - 1] === "?" && str.match(/[a-z\d]/)) {
    return "Sure.";
  } else if (!str.match(/[a-z\xe4\xfc]/)) {
    if (str.match(/[A-Z\xc4\xdc]/)){
      return "Whoa, chill out!";
    } else {
      return "Whatever.";
    }
  } else {
    return "Whatever.";
  }
};

module.exports = Bob;
