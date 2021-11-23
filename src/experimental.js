const isExperimental = (val) => {
  if (typeof val === "undefined") return false;
  return true;
};

module.exports = { isExperimental };
