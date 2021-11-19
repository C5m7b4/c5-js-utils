const { isValid } = require("./index");
var assert = require("assert");

describe("isValid", () => {
  it("should return false when an empty valid is present", () => {
    assert.equal(isValid(""), false);
  });
});
