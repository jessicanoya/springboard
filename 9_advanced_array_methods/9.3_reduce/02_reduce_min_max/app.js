const nums = [2, 5, 6, 8, 12, 1];

const total = nums.reduce(function (sum, num) {
  return sum + num;
}, 0); // 0 is the initial value

nums.reduce(function (max, currentValue) {
  if (currentValue > max) {
    return currentValue;
  }
  return max;
}); // Initial value not needed otherwise the array element at index 0 is used as the inital value

nums.reduce(function (min, currentValue) {
  if (currentValue < min) {
    return currentValue;
  }
  return min;
});
