// ========================
// Arrow Function Shortcuts
// ========================

// For a single parameter
// The parentheses around 'n' is not needed,however, the editor will automatically add it
[1, 2, 3, 4, 5].forEach((n) => {
  console.log(n * 10);
});

// Arrow function with no parameter
const greet = () => {
  console.log("Hello");
};

// Implicit return, no curly braces
[1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);

const double = (n) => n * 2;

// This works
[1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
  if (n % 2 === 0) {
    return "even";
  }
  return "odd";
});

// This does not work
// [1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
//   if (n % 2 === 0) {
//     ("even");
//   }
//   ("odd");
// });

// Ternary Operator '?' (Conditional Operator) is a concise way to write a conditional (if-else) statement
// Syntax: condition ? trueExpression : falseExpression
// ':' means or
// Cannot have multiple expressions returned
[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (n % 2 === 0 ? "even" : "odd"));

const dailyRainTotals = [
  [1.2, 0.35, 2.2],
  [1.7, 0.6, 0.1],
  [2.5, 0.9, 1.5],
];

// Without implicit returns
// dailyRainTotals.map((hourlyRainTotals) => {
//   return hourlyRainTotals.reduce((sum, inchesOfRain) => {
//     return sum + inchesOfRain;
//   });
// });

// With implicit return - it does not like semicolons in implicit returns
dailyRainTotals.map((hourlyRainTotals) =>
  hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain)
);
