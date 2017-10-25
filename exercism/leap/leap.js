//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
//
// YOUR CODE GOES HERE
//  
	this.value = input;
};

Year.prototype.isLeap = function () {
//
// YOUR CODE GOES HERE
//
	let year = this.value;
	let bLeap = false;

	if ((year % 4) === 0) {
		bLeap = true;

		if ((year % 100) === 0) {
			bLeap = false;

			if ((year % 400) === 0){
				bLeap = true;
			}
		}
	}
	return bLeap;
};

module.exports = Year;
