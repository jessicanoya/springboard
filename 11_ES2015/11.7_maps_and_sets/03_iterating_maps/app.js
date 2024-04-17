
const bandData = [
  [3, "3 Doors Down"],
  ["three", "Three Dog Night"],
  ["nine", "Nine Inch Nails"],
  ["four", "The Four Seasons"],
  [41, "Sum 41"],
];
const bandMap = new Map(bandData);

bandMap.size;

bandMap.forEach((val, key) => {
  // With forEach, value is first then key
  console.log(key + "=>" + val);
});

for (let x of bandMap) {
  console.log(x); // Prints an array
}

for (let [key, value] of bandMap) {
  // Destructure
  console.log(key, "=", value);
}
