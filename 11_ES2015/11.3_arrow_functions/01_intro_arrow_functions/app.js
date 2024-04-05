// Standard way to write a callback function
// Anonymous function expression
array.map(function (x) {
  return x * 2;
});

// Function declaration
// Arrow functions cannot replace a function declaration
function greet() {}

// Function expression because it is saved into a variable
const add = function (x, y) {
  return x + y;
};

// Arrow function, does not need the keywork 'function'
const add2 = (x, y) => {
  return x + y;
};

// Standard callback
[2, 3, 6, 78, 99, 104, 23].reduce(function (max, currNum) {
  return Math.max(max, currNum);
});

// Arrow function
[2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
  return Math.max(max, currNum);
});

// Arraow function syntax
(a, b, c, d, e) => {};
