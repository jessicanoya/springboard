const teaOrder = {
  variety: "oolong",
  teaName: "winter sprout",
  origin: "taiwan",
  price: 12.99,
  hasCaffeine: true,
  quantity: 3,
};

// Old way to extract 'deconstruct
const price1 = teaOrder.price;
const quantity1 = teaOrder.quantity;
const teaName1 = teaOrder.teaName;

// New way
// This is similar to unpacking a tuple in Python
// Collecting 'rest' into new a new variable '...remainingData'
const { price, quantity, teaName, ...remainingData } = teaOrder;
const { origin } = teaOrder;

// This property doesn't exist in the object and returns undefined
const country = teaOrder.country; // undefined
