// map - builds an array and needs a return value

const numbers = [21, 37, 64, 99, 142];
const negatives = numbers.map(function (num) {
  return num * -1;
});

const doubles = numbers.map(function (num) {
  console.log(num * 2); // if no return is defined, map will build an undefined array
});

const todo = [
  {
    id: 1,
    text: "walk the dog",
    priority: "high",
  },
  {
    id: 2,
    text: "walk the chickens",
    preiority: "medium",
  },
  {
    id: 3,
    text: "feed the cats",
    priority: "low",
  },
  {
    id: 4,
    text: "put out the fire in my garage",
    priority: "very high",
  },
];

const todoText = todo.map(function (todo) {
  return todo.text;
});

// This returns a nodelist - does not come with array methods
// Array.from() method turns it into an array. Can pass in an array like object
// Has to be an iterable
const links = Array.from(document.querySelectorAll("a"));
links.map(function (a) {
  return a.href;
});
