const DateFormat = (date) => {
  date = new Date(date);

  var day = ("0" + (date.getDate() + 1)).slice(-2);
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var year = date.getFullYear();

  return year + "/" + month + "/" + day;
};

export default DateFormat;
