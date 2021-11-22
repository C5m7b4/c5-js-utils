/* eslint-disable no-undef */
const { isValid, formatDate } = require("./index.js");

test("returns empty string if undefined", () => {
  expect(isValid(undefined)).toBe(false);
});
test("returns empty string when value passed is null", () => {
  expect(formatDate("")).toBe("");
});
