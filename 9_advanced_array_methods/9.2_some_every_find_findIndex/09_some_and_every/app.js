const words = [
  "immunoelectropharotically",
  "rotavator",
  "tsktsk",
  "psychophysicotherapeutics",
  "squirrelled",
  "crypt",
  "uncopyrightable",
  "cysts",
  "pseudopseudohypoparathyroidism",
  "unimaginatively",
];

words.some(function (val) {
  return words.length > 25;
});

// This returns true because there is a word that contains the 'thyroid'
words.some(function (val) {
  return words.indexOf("thyroid") !== -1;
});

words.every(function (word) {
  return word.length >= 5;
});

function allStrings(arr) {
  return arr.every(function (element) {
    return typeof element === "string";
  });
}

const btn = document.querySelector("button");
btn.addEventListener("click", function (event) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  // Convert node list to an array
  const allChecked = Array.from(checkboxes).every(function (checkbox) {
    // Method 'checked'
    return checkbox.checked;
  });
  if (!allChecked) alert("PLEASE AGREE TO EVERYTHING!");
});


