//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//var Year = function() {};

class Year {
  constructor(year) {
    this.year = year;
  }
}

Year.prototype.isLeap = function() {
  // If the year is evenly divisible by 4, go to step
  var year = this.year;
  //var isLeap = false;

  if (year % 4 === 0) {
    //2100
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;

  //  2. Otherwise, go to step 5.
  // If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
  // If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
  // The year is a leap year (it has 366 days).
  // The year is not a leap year (it has 365 days).
};

module.exports = Year;
