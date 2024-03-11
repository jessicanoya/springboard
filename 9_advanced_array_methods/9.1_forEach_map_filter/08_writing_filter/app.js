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

// Accepts an array and a callback funtion
function myFilter(arr, callback) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    // If callback function returns true then push arr[i]
    if (callback(arr[i], i, arr)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

// Returns every element less than or equal to 10 characters long
const shortWords = myFilter(words, function (word) {
  return word.length <= 10;
});

// Returns every even element
const everyOtherWord = myFilter(words, function (word, i) {
  return i % 2 === 0;
});
