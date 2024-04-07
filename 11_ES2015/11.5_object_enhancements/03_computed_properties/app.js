// Compute Property Names
// ES5
let firstName = "Mary";
let instructor = "{}";
instructor[firstName] = "That's me!";

instructor.Mary; // "That's me!"

// ES2015
let fistName1 = "Mary";
let instructor1 = {
  [fistName1]: "That's me!",
};

instructor1.Mary; // "That's me!"

// Old way
function makeColor(name, hex) {
  const color = {};
  color[name] = hex;
  color[hex] = name;
  return color;
}

// New way
function makeColor1(name, hex) {
  return {
    [name]: hex,
    [hex]: name,
  };
}

const mystery = {
  [6 + 7]: "thirteen",
};

const obj = {};
obj[6 + 7] = "thirteen";