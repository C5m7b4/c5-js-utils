const isValid = (val) => {
  // check to see if the value is undefined or null first
  if (typeof val === "undefined" || val === null) {
    return false;
  }

  // then check to see if its a string and if it is, then it needs a length
  if (typeof val === "string" && val.length === 0) {
    return false;
  }

  // check to see if the value is an object. if it is, then it needs to have keys
  if (typeof val === "object") {
    if (Object.keys(val).length === 0) {
      return false;
    }
  }

  return true;
};

const isValidDate = (val) => {
  if (typeof val === "undefined" || val === null) {
    return false;
  }
  if (typeof val === "string" && val.length === 0) {
    return false;
  }

  if (Object.prototype.toString.call(val) === "[object Date]") {
    if (isNaN(val.getTime())) {
      return false;
    } else {
      return true;
    }
  }

  if (typeof val === "string") {
    const newDate = new Date(val);
    if (Object.prototype.toString.call(newDate) === "[object Date]") {
      if (isNaN(newDate.getTime())) {
        return false;
      } else {
        return true;
      }
    }
  }

  return false;
};

const formatDate = (date) => {
  if (typeof date === "undefined" || date === null) return "";
  if (typeof date === "string") {
    if (date.length === 0) return "";
  }

  if (typeof date === "string") {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1,
      day = newDate.getDate(),
      year = newDate.getFullYear();

    return month + "/" + day + "/" + year;
  }

  if (Object.prototype.toString.call(date) === "[object Date]") {
    const month = date.getMonth() + 1,
      day = date.getDate(),
      year = date.getFullYear();

    return month + "/" + day + "/" + year;
  }

  return "";
};

const stringDate = "1/1/2021 5:00 pm";
// const newDate = new Date(stringDate);
console.log(formatDate(stringDate));
module.exports = { isValid, isValidDate, formatDate };
