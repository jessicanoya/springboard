// Code block examples

while (x > y) {}

if (true) {
}

// Can have multiple code blocks within parent code block, thus, let is accessible
if (true) {
  let color = "teal";
  console.log(color);
  if (true) {
    console.log(color);
  }
}

// let variables are also scoped to a function if they are not inside of a code block
function dance() {
  let danceType = "Tango";
}

// It's very common for let to be scoped inside a for loop
// This is because var could overwrite variable i
var i = "hello";
for (let i = 0; i <= 3; i++) {
  console.log(i);
}
console.log(i);

let mood = "fantastic"; // Will not get overwritten
function getMood(num) {
  let mood = "meh";
  if (num < 3) {
    // If num is less than 3, console.log "bad :("
    // Does not overwrite mood because this is a new code block
    let mood = "bad :(";
    console.log(mood);
  }
  // Returns 'meh'
  return mood;
}

getMood(2);
