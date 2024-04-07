// rest operator '...' inside function paranthesis
// rest operator turns arguments, which is a array-like-object into an array
function doSomething(...asd) {}

function sum(...nums) {
  nums.reduce((sum, n) => sum + n);
}

const sumAll = (...values) => {
  if (!values.length) return undefined;
  return values.reduce((sum, n) => sum + n);
};

// Multiple parameters
function makeFamily(parent1, parent2, ...kids) {
  // Return an object
  return {
    parents: [parent1, parent2],
    children: kids.length ? kids : 0,
  };
}
// makeFamily('cindy', 'peter', 'cody', 'carly')

const filterByType = (type, ...vals) => {
  return vals.filter((v) => typeof v === type);
};

// This will not work
// SyntaxError: Rest parameter must be last formal parameter
// function printStuff(a,...rest,b){}
