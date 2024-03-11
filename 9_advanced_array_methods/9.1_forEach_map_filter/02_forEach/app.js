// forEach loops thru an array
// Runs a callback function for each value in the array and returns undefined
// forEach will always return undefined - not matter what
// Calls some function for each element in an array

let arr = [1, 2, 3];

arr.forEach(function (value, index, array) {
  console.log(value);
});

// 1
// 2
// 3
// undefined

const color = ["teal", "cyan", "peach", "purple"];

color.forEach(function (val, i) {
  console.log(val.toLocaleUpperCase());
});

function yell(val, i) {
  const caps = val.toLocaleUpperCase();
  console.log(`At index ${i}, ${caps}`);
}

color.forEach(yell);

// const prices = [30.99, 19.99, 2.5, 99.0];
// let total = 0;
// prices.forEach(function (price) {
//   total += price;
// });
// console.log(total);

// 'For of' is an easier way to iterate thru a loop
// This is newer syntax in JS in comparison to forEach
const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
for (let price of prices) {
  total += price;
}
console.log(total);

// let total = 0;
// for (let i = 0; i < prices.length; i++) {
//   total += prices[i];
// }
