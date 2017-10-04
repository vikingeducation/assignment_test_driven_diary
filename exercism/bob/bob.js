class Bob {
	hey(message) {
		var question = /\?/g;
		var shout = /[A-Z][A-Z\d]+/g;
		var silence = /^\s+/g;

		if (
			message.toUpperCase() === message &&
			message.replace(/[a-z]/gi, "") !== message
		) {
			return "Whoa, chill out!";
		} else if (question.test(message)) {
			return "Sure.";
		} else if (silence.test(message)) {
			return "Fine. Be that way!";
		} else {
			return "Whatever.";
		}
	}
}

module.exports = Bob;
