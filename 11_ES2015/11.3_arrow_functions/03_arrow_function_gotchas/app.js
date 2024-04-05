//=======================
// Arrow Function Gotchas
//=======================

// const makeMath = (num) => {
//   return {
//     square: num * num,
//     double: num * 2,
//   };
// };

// Add parenthesis so that arrow function doesn't think its the start of a code block
const makeMath = (num) => ({
  square: num * num,
  double: num * 2,
});

// This works
// const cat1 = {
//   name: "Bob",
//   meow: function () {
//     return `${this.name} says MEOW!!!`;
//   },
// };

const cat = {
  name: "Bob",
  // Works - function expression
  eat: function () {
    return `${this.name} chows down`;
  },
  // Will not work - arrow function expression
  meow: () => {
    return `${this.name} says MEOW!!!`;
  },
};
