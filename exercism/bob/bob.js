var Bob = function() {};

Bob.prototype.hey = function(input) {
	var str = input.trim();
	var returnStr = '';

	if (str === '') 
		returnStr = 'Fine. Be that way!';
	else if (str === str.toUpperCase()) {
		returnStr = 'Whoa, chill out!';
		if (str.search(/\d/) > -1) {
			if (str.endsWith('?')) 
				returnStr = 'Sure.'
			else if (str.endsWith('!')) 
				returnStr = 'Whoa, chill out!';
			else
				returnStr = 'Whatever.';
		} 
	}
	else if (str.endsWith('?'))
		returnStr = 'Sure.'
	else returnStr = 'Whatever.'

	return returnStr;
}

module.exports = Bob;