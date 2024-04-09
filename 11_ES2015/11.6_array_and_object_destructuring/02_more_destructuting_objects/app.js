const teaOrder = {
  variety: "oolong",
  teaName: "winter sprout",
  origin: "taiwan",
  price: 12.99,
  hasCaffeine: true,
  quantity: 3,
  brewTemp: 180,
};

// Only works if it cannot find brewTemp in object
// This variable does not overwrite brewTemp: 180
const { brewTemp: temp = 175 } = teaOrder; // Rename brewRemp to temp and assign a value of 175

// Renaming with destructuring
// This renames the key teaName to tea
const { teaName: tea } = teaOrder; // ReferenceError: teaName is not defined

function checkout(tea) {
  const { quantity, price } = tea;
  return quantity * price;
}

checkout(teaOrder);

// Suppose property quantity didn't exist
const order1 = {
  variety: "oolong",
  teaName: "winter sprout",
  origin: "taiwan",
  price: 12.99,
  hasCaffeine: true,
};

// Because quantity does not exist, the default value is 1
// If it did exist, quantity would not overwrite the value inside the object
function checkout1(tea) {
  const { quantity = 1, price } = tea;
  return quantity * price;
}