function sum() {
  // arguments is not array and you get syntax error
  // TypeError: arguments.reduce is not a function
  return arguments.reduce((sum, val) => {
    return sum + val;
  });
}

function sum1() {
  const args = Array.from(arguments);
  return args.reduce((sum, val) => {
    return sum + val;
  });
}

// This does not work because its inside an arrow function
const max = () => {
  console.log(arguments);
};

// Regular function expression
const max1 = function () {
  const args = Array.from(arguments);
  return args.reduce((max, currentVal) => {
    // If currentVal is greater than max then return currenVal, otherwise return max
    return currentVal > max ? currentVal : max;
  });
};
