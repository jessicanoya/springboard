const scores = [
  0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93,
];

scores.find(function (score) {
  return score > 75;
});

// find will only return value of first match, in this case 88
scores.find(function (score) {
  return score !== 0 && score % 2 === 0;
});

// Filter acts like a 'find all', although, 'find all' does not exist
const evenScores = scores.filter(function (score) {
  return score % 2 === 0;
});

// findIndex returns the index of that value
const firstEven = scores.findIndex(function (score) {
  return score !== 0 && score % 2 === 0;
});

// This would return -1 because the index does not exist
scores.findIndex(function (score) {
  return score > 100;
});

function partition(arr, pivot) {
  const pivotIdx = arr.findIndex(function (element) {
    return element > pivot;
  });
  const left = arr.slice(0, pivotIdx);
  const right = arr.slice(pivotIdx);
  return [left, right];
}
