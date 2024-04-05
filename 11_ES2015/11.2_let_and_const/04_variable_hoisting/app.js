var chickens; // This variable exists but its undefined
console.log(chickens); // undefined

chickens = ["butters", "nancy", "junior", "tilda", "stevie chicks"];
console.log(chickens); // Prints out array

// This is known as variable hoisting

// Variable declarations made with the let and const keyword are not hoisted
// Declaration will not run separately from initialization

let bird; // Undefined
bird = 'Papagaio' // This will work and print bird variable

// const fish; SyntaxError: Missing initializer in const declaration
// Have to a assign a value when declaring a variable with const keyword
