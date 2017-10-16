const displayDate = (miliseconds) => {
  var date = new Date(miliseconds);
  return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
};

const displayDateAndTime = (miliseconds) => {
  var date = new Date(miliseconds);
  return displayDate(miliseconds) + ' ' + date.toLocaleTimeString();
};

module.exports = { displayDate, displayDateAndTime };
