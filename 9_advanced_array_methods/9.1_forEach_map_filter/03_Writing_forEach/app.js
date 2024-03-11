// Loops thru the array
// Runs a callback function on each value in the array
// Returns undefined

const color = ["teal", "cyan", "peach", "purple"];

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

forEach(color, function (color, i) {
  console.log(color.toUpperCase(), "at index of:", i);
});

color.forEach(function (color, i) {
  console.log(color.toUpperCase(), "at index of:", i);
});