const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

// module.exports.sum = sum;
// module.exports.sub = sub;

// exports = module.exports
// exports.sum = sum;
// exports.sub = sub;

module.exports = { sum, sub };

// Wrong: new reference for exports
// exports = { sum, sub };
