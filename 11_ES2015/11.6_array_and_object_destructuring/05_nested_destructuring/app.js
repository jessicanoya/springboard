const person = {
  id: 44,
  name: "Jess",
  isHilarious: true,
  funFacts: {
    favoriteFood: "Brazilian Food",
    favoriteDrink: "Black Coffee",
  },
};

const {
  funFacts: { favoriteFood, favoriteDrink },
} = person;

console.log(favoriteFood); // Brazilian Food
