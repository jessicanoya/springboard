// myMap([1, 2, 3], function (val) {
//   return val * 3;
// });
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

function myMap(arr, callback) {
  const mappedArray = [];
  for (let i = 0; a < arr.length; i++) {
    const val = callback(arr[i], i, arr);
    mappedArray.push(val);
  }
  return mappedArray;
}

const priorityMap = myMap(todo, function (todo) {
  return todo.priority;
});

const repeatedStrings = myMap(["a", "b", "c", "d", "e"], function (str, idx) {
  return str.repeat(idx);
});
