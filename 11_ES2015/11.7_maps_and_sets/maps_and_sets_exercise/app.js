// ## **Quick Question #1**
// What does the following code return?

new Set([1, 1, 2, 2, 3, 4]); // {1, 2, 3, 4}

// ## **Quick Question #2**
// What does the following code return?

const aSet = [...new Set("referee")].join(""); // ref

// ## **Quick Questions #3**
// What does the Map ***m*** look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true); // key [1,2,3] and value true
m.set([1, 2, 3], false); // key [1,2,3] and value false

// ## **hasDuplicate**
// Write a function called hasDuplicate which accepts an array and returns true
// or false if that array contains a duplicate

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

// ## **vowelCount**
// Write a function called vowelCount which accepts a string and returns a map where the 
// keys are numbers and the values are the count of the vowels in the string.

function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }