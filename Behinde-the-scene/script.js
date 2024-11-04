'use strict';
//global scope
// function calAge(birthYear) {
//   //parent scope
//   const age = 2037 - birthYear;

//   function printAge() {
//     //child scope
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1999) {
//       const str = `Oh! you are a millenial, ${firstName}`;
//       console.log(str);
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Ridwan'; //global scope
// calAge(2004);

//HOISTING Variable in practice
// console.log(me); //hoisted to undefined
// console.log(job); //cannot be access before initialization TDZ
// console.log(age); //cannot be access before initialization TDZ

// var me = 'Ridwan';
// let job = 'Designer';
// const age = 26;

//HOISTING function in practice
// console.log(addDecl(2, 3)); //can be accessed before initialization
// console.log(addExpr(2, 3)); //cannot be access before initialization TDZ
// console.log(addArrow(2, 3)); //cannot be access before initialization TDZ

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

//THIS KEYWORDS
// console.log(this); //global object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

//Primitive value
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//Refrence value
const me = {
  name: 'Ridwan',
  age: 26,
};
const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('me', me);
