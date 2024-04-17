const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const functionCalls = new Map();
functionCalls.set(add, 0);
functionCalls.set(multiply, 0);

functionCalls.set(add, 1); // Set key to 'add' and initialize it to 0
functionCalls.set(multiply, 9); // Set key to 'multiply' and initialize it to 9

const bandData = [
  [3, "3 Doors Down"],
  ["three", "Three Dog Night"],
  ["nine", "Nine Inch Nails"],
  ["four", "The Four Seasons"],
  [41, "Sum 41"],
];
const bandMap = new Map(bandData);

bandMap.set(182, "Blink-182").set("twenty", "Matchbox Twenty");
