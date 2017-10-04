Pangram = function(text) {
	this.val = text;
};

Pangram.prototype.isPangram = function() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";

	var letters = this.val.toLowerCase();

	for (var i = 0; i < alphabet.length; i++) {
		if (letters.indexOf(alphabet[i]) == -1) {
			console.log(i);
			return false;
		}
		return true;
	}
};

module.exports = Pangram;
