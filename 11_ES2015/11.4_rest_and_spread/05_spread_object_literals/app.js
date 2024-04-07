const tea = {
  type: "oolong",
  name: "winter sprout",
  origin: "taiwan",
};

const teaData = {
  steepTime: "30s",
  brewTemp: 175,
  origin: "japan",
};

// Objects are not iterable - TypeError
// const arr = [...tea];

// Making a copy of 'tea' object
const tea2 = { ...tea };

const teaTin = { ...tea, price: 22.99 };

// Order does matter when spreading objects together
const newTea = { ...tea, name: "golden frost" };

const fullTea = { ...tea, teaData, origin: "china" };

const colors = ["red", "orange", "blue"];

// colors object will get overwritten with CAT string
const dummyObj = { ...colors, ..."CAT" };
