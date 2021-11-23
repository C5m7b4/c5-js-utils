/* eslint-disable no-undef */
const { isExperimental } = require("./experimental");

test("should return false when an undefined value is passed to it", () => {
  expect(isExperimental(undefined)).toBe(false);
});
test("should return true when something is passed to it", () => {
  expect(isExperimental("something")).toBe(true);
});
