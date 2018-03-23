var Cipher = function(key) {
	if (key != undefined && !key.match(/^[a-z]+$/)) {
		this.key = key || "aaaaaaaaaa";
	}
};

var letters = "abcdefghijklmnopqrstuvwxyz";

Cipher.prototype.encode = function(text) {
	return text;
};

module.exports = Cipher;
