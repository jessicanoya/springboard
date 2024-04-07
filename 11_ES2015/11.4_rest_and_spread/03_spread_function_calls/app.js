const nums = [4, 5, 88, 123, 0.92, 34];
Math.max(nums); // NaN
Math.max(...nums); // 123

// ...vals here is a rest operator because it is part of a function definition
const filterByType = (type, ...vals) => {
  return vals.filter((v) => typeof v === type);
};

// Taking a collection and 'spreading it out'
const things = [23, 45, true, false, 0, "hello", "goodbye", undefined];

// ...things is spread operator
filterByType("number", ...things);

console.log(...things);
console.log(..."HELLO");
