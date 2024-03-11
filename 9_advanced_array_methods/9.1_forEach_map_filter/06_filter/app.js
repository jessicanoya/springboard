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

// callback function
const containsVowel = function (word) {
  for (let char of word) {
    // If it contains a vowel, return true
    if (isVowel(char)) return true;
  }
  return false;
};

const isVowel = function (char) {
  return "aeiou".indexOf(char) !== -1;
};

const longWords = words.filter(function (word) {
  // returns true or false
  // If true, filter will create a new array with true values
  return word.length >= 20;
});

const letterFilter = words.filter(function (w) {
  // return words that start with the letter 'u' or 'c'
  return w[0] === "u" || w[0] === "c";
});

const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function (word) {
  return !containsVowel(word);
});
