var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var Pangram = function(input) {
	this.text = input;
};

Pangram.prototype.isPangram = function() {
	var returnVal = true;
	var str = this.text.toLowerCase();
	if (str === '') returnVal = false;

	alphabet.forEach(letter => {
		if (!str.includes(letter)) returnVal = false;
	})
	
	return returnVal;
};

module.exports = Pangram;