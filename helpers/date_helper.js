var displayDate = (miliseconds) => {
  var date = new Date(miliseconds);
  return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
};

module.exports = { displayDate };
