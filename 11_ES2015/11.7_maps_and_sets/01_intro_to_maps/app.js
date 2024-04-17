// Create an empty map with "new" keyword
const myMap = new Map();
myMap.set(7, "seven");
myMap.set("7", "seven string");

const empty = [];
myMap.set([], "empty array!");
myMap.set(true, "TRUE");

myMap.get(7);
