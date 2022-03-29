// const generateMessages = (names) => {
//   return names.map(name => {
//     return `Hi ${name}! 50% off our best candies for you today!`;
// });
// }

// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// console.log(generateMessages(names));


// const person = {
//   name: 'Maxine',
//   age: 32,
//   address: {
//     city: 'London',
//     postcode: 'E1 123'
//   },
//   hobbies: ['writing', 'tennis', 'cooking']
// };

// console.log(person.address.city);

// console.log(person.hobbies[1]);

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (arr) => {
  return arr.map(person => {
    return `Hi ${person.name}! ${person.discount}% off candies today!`;
  });

}

console.log(generateMessages(namesAndDiscounts));