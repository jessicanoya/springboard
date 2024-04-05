// Variable is in a global scope
// Added as a property on the window object "window.song"
// This is true only outside of a function

var song = "Goodbye Yellow Brick Road";

function sing() {
  if (true) {
    // Variables declared with var are scoped to the function that they are in
    // It does not matter if its declared within a conditional/loop
    var song = "Goodbye Yellow Brick Road";
    // Can also re-declare with var
    var song = "123";
  }
  console.log(song);
}
