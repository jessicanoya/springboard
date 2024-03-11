// Function declaration
function holler() {
  console.log("Hello World");
}

// Function expression - function stored in a variable
// This is also defined as an anonymous function expression
// To execute this function whisper()
const whisper = function () {
  console.log("I have a secret");
};

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function power(x, y) {
  return x ** y;
}

// Can store functions in arrays
const mathFuncs = [add, subtract, multiply, divide, power];

// Callback functions
setTimeout(whisper, 1000);

function doMath(a, b, mathFunc) {
  return mathFunc(a, b);
}

doMath(4, 2, subtract);

// Inline anonymous function
doMath(3, 4, function (a, b) {
  console.log(a ** b);
});

function doAllMath(a, b, mathFuncs) {
  for (let func of mathFuncs) {
    console.log(func(a, b));
  }
}

// Can pass a function in addEventListener
addEventListener("click", function () {});