//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
	this.value = input;
};

Year.prototype.isLeap = function() {
	var result;
	if (
		(this.value % 4 === 0 && this.value % 100 != 0) ||
		this.value % 400 === 0
	) {
		result = true;
	} else {
		result = false;
	}
	return result;
};

module.exports = Year;
