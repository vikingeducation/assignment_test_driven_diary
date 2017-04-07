var dateFormatter = {};

dateFormatter.format = (date) => {
  let dateObj = {
    dayOfWeek: dateFormatter.dayOfWeek(date.getDay()),
    dayOfMonth: date.getDate(),
    month: dateFormatter.month(date.getMonth()),
    year: date.getFullYear(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  }
  return `${dateObj.dayOfWeek}, ${dateObj.dayOfMonth} ${dateObj.month} ${dateObj.year} ${dateObj.hour}:${dateObj.minute}:${dateObj.second} GMT`
}

dateFormatter.dayOfWeek = (int) =>{
  let days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }
  return days[int];
}

dateFormatter.month = (int) => {
  let months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  }
  return months[int];
}

module.exports = dateFormatter;

