// How does it work?

const scores = [
  0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93,
];

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) return arr[i];
  }
  // This line of code is not necessary because if nothing is returned its undefined anyways
  return undefined;
}

myFind(scores, function (score) {
  return score > 91;
});

function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) return i;
  }
  return -1;
}

myFindIndex(scores, function (score) {
  return score !== 0 && score % 2 == 0;
});
