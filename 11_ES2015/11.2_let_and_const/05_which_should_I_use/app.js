// What should I use?

// 1. Never use var. There's really no need to use it
// 2. Always start with const. If const ins't going to work with what you need then change it to let
// Example:
const count = 0;
count += 1; // TypeError: Assignment to constant variable
// 3. Always use const with an array, object, function, etc.
