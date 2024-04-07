// Old school
function makePerson(first, last, age) {
  return {
    first: first,
    last: last,
    age: age,
    isAlive: true,
  };
}

// New way
function makePerson1(first, last, age) {
  return {
    first,
    last,
    age,
    isAlive: true,
  };
}
