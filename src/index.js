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

const pad = (input, desiredLength, padChar, direction = "left") => {
  if (typeof input != "string") return input;
  if (typeof desiredLength === "undefined" || desiredLength === null) {
    return input;
  }
  if (typeof desiredLength != "number") return input;
  if (typeof padChar === "undefined" || padChar === null) {
    return input;
  }
  if (typeof padChar != "string") return input;

  if (desiredLength <= input.length) {
    return input;
  }
  const charsToPad = desiredLength - input.length;
  // eslint-disable-next-line
  const padding = [...Array(Number(charsToPad))].map((c, i) => {
    return padChar;
  });

  if (direction.toLowerCase() === "left") {
    return padding.join("") + input;
  } else {
    return input + padding.join("");
  }
};

const getDayOfWeek = (d) => {
  if (!isValid(d)) {
    return "";
  }
  try {
    const myDate = new Date(d);
    const dayOfWeek = myDate.getDay();
    if (isNaN(dayOfWeek)) {
      return "";
    }
    switch (dayOfWeek) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  } catch {
    return "";
  }
};

const addDays = (date, days) => {
  if (typeof date === "undefined" || date === null) {
    return "";
  }

  if (typeof days === "undefined" || days === null) {
    return "";
  }

  if (isNaN(days)) {
    return "";
  }

  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const formatTimeString = (date) => {
  if (typeof date === "undefined" || date === null) return "";
  if (date.length === 0) return "";

  if (typeof date === "string") {
    date = new Date(date);
  }

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

console.log(formatTimeString(new Date("1/1/2021 8:00 pm")));

module.exports = {
  isValid,
  isValidDate,
  formatDate,
  pad,
  getDayOfWeek,
  addDays,
  formatTimeString,
};
