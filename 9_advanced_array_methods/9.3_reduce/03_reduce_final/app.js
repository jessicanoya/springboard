// Write a reduce function that will return an object that looks like this:

// {
//     15:3,
//     16:2,
//     17:1,
//     14:1
// }

const people = [
  { name: "Jimbo", age: 15 },
  { name: "Allison", age: 16 },
  { name: "Juan", age: 15 },
  { name: "Bertha", age: 17 },
  { name: "Monty", age: 16 },
  { name: "Simone", age: 15 },
  { name: "Jess", age: 14 },
];

const ages = people.reduce(function (peopleAges, currentPerson) {
  console.log(`peopleAges: ${JSON.stringify(peopleAges)}`);
  console.log(`currentPerson: ${JSON.stringify(currentPerson)}`);
  console.log("======================");
  const age = currentPerson.age;
  // Check if key is empty
  if (peopleAges[age] == null) {
    // If empty, create key and set it to 1
    peopleAges[age] = 1;
  } else {
    peopleAges[age] += 1;
  }
  return peopleAges;
}, {}); // Start as empty object
