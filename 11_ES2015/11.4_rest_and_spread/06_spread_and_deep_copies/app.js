// Creating copies of nested data structures
const shoppingCart = [
  {
    name: "honey orchid",
    quantity: 2,
    price: 13.5,
  },
  {
    name: "african solstice",
    quantity: 4,
    prince: 25.99,
  },
];

// Does not perform a deep clone
// Keeps the original references for nested arrays or objects
const cartCopy = [...shoppingCart];
