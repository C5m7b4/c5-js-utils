/* eslint-disable no-undef */
const { isValid, isValidDate, formatDate } = require("./index");
var assert = require("assert");

describe("isValid", () => {
  it("should return false when an empty valid is present", () => {
    assert.equal(isValid(""), false);
  });
  it("should return false when null value is present", () => {
    assert.equal(isValid(null), false);
  });
  it("should return false when an undefined value is passed in", () => {
    assert.equal(isValid(undefined), false);
  });
  it("should return false when an object with no keys is passed in", () => {
    const myObj = {};
    assert.equal(isValid(myObj), false);
  });

  it("should return true when a valid string is passed in", () => {
    assert.equal(isValid("Hello"), true);
  });
  it("should return true when an object with keys is passed in", () => {
    const myObj = { name: "Mike", age: 47 };
    assert.equal(isValid(myObj), true);
  });
});

describe("isValidDate", () => {
  it("should return false when an empty valid is present", () => {
    assert.equal(isValidDate(""), false);
  });
  it("should return false when null value is present", () => {
    assert.equal(isValidDate(null), false);
  });
  it("should return false when an undefined value is passed in", () => {
    assert.equal(isValidDate(undefined), false);
  });
  it("should return false when an invalid Date object is passed in", () => {
    const stringDate = "1/35/2021";
    const newDate = new Date(stringDate);
    assert.equal(isValidDate(newDate), false);
  });
  it("should return true when a new Date() object is passed in", () => {
    const newDate = new Date();
    assert.equal(isValidDate(newDate), true);
  });
  it("should return true when a string representation of a date is passed in", () => {
    assert.equal(isValidDate("1/1/2021"), true);
  });
});

describe("formatDate", () => {
  it("should return an empty string when undefinded value is specified", () => {
    assert.equal(formatDate(undefined), "");
  });
  it("should return an empty string when a null value is specified", () => {
    assert.equal(formatDate(null), "");
  });
  it("should return an empty string if an empty string is passed in", () => {
    assert.equal(formatDate(""), "");
  });
  it("should return an empty string if an object is passed in", () => {
    const myObj = { name: "mike", age: "47" };
    assert.equal(formatDate(myObj), "");
  });
  it("should return a formatted date if a string date is passed in", () => {
    const stringDate = "1/1/2021 5:00 pm";
    assert.equal(formatDate(stringDate), "1/1/2021");
  });
  it("should return a formatted date if a date object is passed in with the time", () => {
    const stringDate = "1/1/2021 5:00 pm";
    const newDate = new Date(stringDate);
    assert.equal(formatDate(newDate), "1/1/2021");
  });
});
