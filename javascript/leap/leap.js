//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  console.log("------" + this.year);
  if (this.year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

var year = new Year(2015);
console.log(year);
console.log(year.isLeap());

module.exports = Year;
