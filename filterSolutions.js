//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];
//1. Get characters with mass greater than 100
// const massGreaterThan100 = characters.filter((character) => {
//   return character.mass > 100
// })
// console.log(massGreaterThan100)

//2. Get characters with height less than 200
// define a function 
// call the object/hash 'characters' and filter each element
  // the filter method takes a callback function (the arrow function)
  // in the function we get a reference to each individual character in the characters object
  // we want to return a boolean (true or false) on whether or not it should be included
  // return the characters with heights under 200 
const heightLessThan200 = characters.filter((character) => {
  return character.height < 200
})
console.log(heightLessThan200)

//3. Get all male characters
// const maleCharacters = characters.filter(
//   (character) => character.gender === 'male'
// );
// console.log(maleCharacters)

//4. Get all female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === 'female'
); 
console.log(femaleCharacters)
