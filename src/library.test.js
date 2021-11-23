/* eslint-disable no-undef */

const {
  isValid,
  isValidDate,
  formatDate,
  pad,
  // getDayOfWeek,
  // addDays,
  // formatTimeString,
  // formatMoney,
} = require("./index");

test("should return false when empty string is passed in", () => {
  expect(isValid("")).toBe(false);
});
test("should return false when a null value is passed in", () => {
  expect(isValid(null)).toBe(false);
});
test("should return false when an undefined value is passed in", () => {
  expect(isValid(undefined)).toBe(false);
});
test("should return false when an object with no keys is passed in", () => {
  const myObj = {};
  expect(isValid(myObj)).toBe(false);
});
test("should return true when a valid string is passed in", () => {
  expect(isValid("hello")).toBe(true);
});
test("should return true when a valid object is passed in", () => {
  const myObj = { name: "mike", age: 47 };
  expect(isValid(myObj)).toBe(true);
});

// isValidDate
test("should return false when an empty string is passed in", () => {
  expect(isValidDate("")).toBe(false);
});
test("should return false when null value is present", () => {
  expect(isValidDate(null)).toBe(false);
});
test("should return false when an undefined value is passed in", () => {
  expect(isValidDate(undefined)).toBe(false);
});
test("should return false when an invalid date object is passed in", () => {
  const stringDate = "1/35/2021";
  const newDate = new Date(stringDate);
  expect(isValidDate(newDate)).toBe(false);
});
test("should return true when a new Date() object is passed in", () => {
  expect(isValidDate(new Date())).toBe(true);
});
test("should return true when a string representation of a date is passed in", () => {
  expect(isValidDate("1/1/2021")).toBe(true);
});

// FormatDate
test("should return an empty string when undefined value is specified", () => {
  expect(formatDate(undefined)).toBe("");
});
test("should return an empty string when a null value is specified", () => {
  expect(formatDate(null)).toBe("");
});
test("should return an empty string if an empty string is passed in", () => {
  expect(formatDate("")).toBe("");
});
test("should return an empty string if an object is passed in", () => {
  const myObj = { name: "mike", age: 47 };
  expect(formatDate(myObj)).toBe("");
});
test("should return a formatted date if a string date is passed in", () => {
  expect(formatDate("1/1/2021")).toBe("1/1/2021");
});
test("should return a formatted date if a date object is passed in with the time", () => {
  const stringDate = "11/12/2021 5:00 pm";
  const newDate = new Date(stringDate);
  expect(formatDate(newDate)).toBe("11/12/2021");
});

// Pad
test("should return the object passed in when passing in an object. Only works on strings", () => {
  const myObj = { name: "mike", age: 47 };
  expect(pad(myObj)).toMatchObject(myObj);
});
test("should return entire string when desiredLength is undefined", () => {
  expect(pad("123")).toEqual("123");
  expect(pad("123", undefined)).toEqual("123");
});
it("should return entire string when desiredLength is null", () => {
  expect(pad("123", null)).toEqual("123");
});
it("should return the entire string when the desiredLength is not a number", () => {
  expect(pad("123", "5")).toEqual("123");
});
it("should return entire string when padchar is undefined", () => {
  expect(pad("123", 5)).toEqual("123");
  expect(pad("123", 5, undefined)).toEqual("123");
});
it("should return entire string when padchar is null", () => {
  expect(pad("123", 5, null)).toEqual("123");
});
it("should return entire string when padChar is not a string", () => {
  expect(pad("123", 5, 5)).toEqual("123");
});
it("should return entire string if desiredLength is <= the length of the input", () => {
  expect(pad("123", 3, "0")).toEqual("123");
});
it("should return 00123 when input is '123' and desiredLength = 5 and padChar = '0'", () => {
  expect(pad("123", 5, "0")).toEqual("00123");
});
it("should return 12300 when desiredLength = 5 and padChar = '0' and direction='right", () => {
  expect(pad("123", 5, "0", "right")).toEqual("12300");
});

// describe("getDayOfWeek", () => {
//   it("should return an empty string when no value is passed to it", () => {
//     assert.equal(getDayOfWeek(), "");
//   });
//   it("should return an empty string when a non valid date string is passed", () => {
//     assert.equal(getDayOfWeek(""), "");
//     assert.equal(getDayOfWeek("1/40/2021"), "");
//   });
//   it("should return Friday when the date passed in is '11/19/2021'", () => {
//     assert.equal(getDayOfWeek("11/19/2021"), "Friday");
//   });
// });

// describe("addDays", () => {
//   it("should return an empty string when no date is passed in", () => {
//     assert.equal(addDays(), "");
//   });
//   it("should return an empty string when the date passed in is undefined", () => {
//     assert.equal(addDays(undefined), "");
//   });
//   it("should return an empty string when the date passed in is null", () => {
//     assert.equal(addDays(null), "");
//   });
//   it("should return an empty string when the number of days is undefined", () => {
//     assert.equal(addDays("1/1/2021", undefined), "");
//   });
//   it("should return an empty string when the number of days is null", () => {
//     assert.equal(addDays("1/1/2021", null), "");
//   });
//   it("should return an empty string when the number of day is not a number", () => {
//     assert.equal(addDays("1/1/2021", "some string"), "");
//   });
//   // it("should return '1/20/2021' when passed a '1/15/2021' with a value of 5 for days", () => {
//   //   assert.equal(
//   //     addDays("1/15/2021", 5),
//   //     new Date("2021-01-20T06:00:00.000Z").toString()
//   //   );
//   // });
// });

// describe("formatTimeString", () => {
//   it("should return an empty string when input is undefined", () => {
//     assert.equal(formatTimeString(undefined), "");
//   });
//   it("should return an empty string when input is null", () => {
//     assert.equal(formatTimeString(null), "");
//   });
//   it("should return 8:00 pm when input contains 8pm", () => {
//     assert.equal(formatTimeString(new Date("1/1/2021 8:00 pm")), "8:00 pm");
//   });
//   it("should return 8:00 am when input contains 8pm", () => {
//     assert.equal(formatTimeString(new Date("1/1/2021 8:00 am")), "8:00 am");
//   });
// });

// describe("formatMoney", () => {
//   it("should return 1 when no decimals are present", () => {
//     assert.equal(formatMoney("1", 0), "1");
//   });
//   it("should return 1.0 when passed formatMoney('1', 1)", () => {
//     assert.equal(formatMoney("1", 1), "1.0");
//   });
//   it("should return 100.00 when passed formatMoney('100', 2)", () => {
//     assert.equal(formatMoney("100", 2), "100.00");
//   });
//   it("should return 1,000.00 when passed formatMoney('1000', 2)", () => {
//     assert.equal(formatMoney("1000", 2), "1,000.00");
//   });

//   it("should return -1 when no decimals are present", () => {
//     assert.equal(formatMoney("-1", 0), "-1");
//   });
//   it("should return -1.0 when passed formatMoney('-1', 1)", () => {
//     assert.equal(formatMoney("-1", 1), "-1.0");
//   });
//   it("should return -100.00 when passed formatMoney('-100', 2)", () => {
//     assert.equal(formatMoney("-100", 2), "-100.00");
//   });
//   it("should return -1,000.00 when passed formatMoney('-1000', 2)", () => {
//     assert.equal(formatMoney("-1000", 2), "-1,000.00");
//   });
// });
