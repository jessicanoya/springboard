const teaOrder = {
  variety: "oolong",
  teaName: "winter sprout",
  origin: "taiwan",
  price: 12.99,
  hasCaffeine: true,
  brewTemp: 180,
};

// Destructuring inside the function parameter
// The property name has to match whats in the object
function getTotal({ quantity: qty = 1, price }) {
  return qty * price;
}

const longJumpResults = ["Tammy", "Jessica", "Violet"];
const swimMeetResults = ["Japan", "France", "Chile"];

// The name in an array does not matter, index does
function awardMedals([gold, silver, bronze]) {
  return {
    gold,
    silver,
    bronze,
  };
}

awardMedals(longJumpResults); // {gold: 'Tammy', silver: 'Jessica', bronze: 'Violet'}
awardMedals(swimMeetResults); // {gold: 'Japan', silver: 'France', bronze: 'Chile'}
