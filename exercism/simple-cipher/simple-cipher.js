var letters = 'abcdefghijklmnopqrstuvwxyz';

function Cipher(key) {
	if (key === '') { 
		throw new Error('Bad key');
	}

	if (key && (key.toUpperCase() === key ||
		 /^\d+$/.test(key))) { 
		throw new Error('Bad key');
	}

	this.key = key || generateRandomKey();
}

Cipher.prototype.encode = function(text) {
	var characters = text.split('');
	var encodedChars = [ ];
	var self = this;

	// this is for the last test case where key length is < text length
	var newKey = self.key;
	while (newKey.length < text.length) {
		newKey += newKey;
	}

	self.key = newKey;

	characters.forEach(function(character,index) {
		var newIndex = letters.indexOf(character) + 
					   letters.indexOf(self.key[index]);
		if (newIndex >= letters.length) {
			newIndex -= letters.length;
		}
		encodedChars.push(letters[newIndex]);
	});

	return encodedChars.join('');
};

Cipher.prototype.decode = function(cipher) {
	var characters = cipher.split('');
	var decodedChars = [ ];
	var self = this;

	characters.forEach(function(character,index) {
		var newIndex = letters.indexOf(character) - 
					   letters.indexOf(self.key[index]);
		if (newIndex < 0) {
			newIndex += letters.length;
		}
		decodedChars.push(letters[newIndex]);
	});

	return decodedChars.join('');
};

function generateRandomKey() {
	var i, randomKey = '';
	for (i = 0; i < 100; i++) {
		randIndex = Math.floor(Math.random() * letters.length);
		randomKey += letters[randIndex];
	}
	return randomKey;
}

module.exports = Cipher;