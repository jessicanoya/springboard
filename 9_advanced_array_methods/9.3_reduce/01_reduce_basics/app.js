const nums = [2, 5, 6, 8, 12, 1];

// reduce has to have two parameters
// accumulator stores the value returned previously by the callback
// const total = nums.reduce(function (accumulator, currentValue) {
//   console.log(`Accumulator is: ${accumulator}`);
//   console.log(`currentVal is: ${currentValue}`);
//   let updatedSum = accumulator + currentValue;
//   console.log(`updatedSum is: ${updatedSum}`);
//   console.log("======================");
//   return updatedSum;
// }, 0);

const total = nums.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
