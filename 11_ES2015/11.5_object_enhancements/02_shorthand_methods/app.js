// Create methods in an object
const mathStuff = {
  x: 200,
  add: function (a, b) {
    return a + b;
  },
  square: function (a) {
    return a * a;
  },
};

// A method is a function that is stored as a property in an object
// This is how you'd call it
mathStuff.add(3, 7);
mathStuff.square(9);

// Re-write mathStuff using shorthand
// Cannot use arrow function with shorthand
const mathStuff1 = {
  x: 200,
  add(a, b) {
    return a + b;
  },
  square(a) {
    return a * a;
  },
  // However, this you can do but not recommended
  multiply: (a, b) => {
    return a * b;
  },
};
