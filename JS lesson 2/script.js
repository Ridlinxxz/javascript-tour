'use strict'; //ACTIVATED SCRIPT MODE ALL THROUGH THE CODE.

// let hasDriverLiscence = false;
// const passText = true;

// if (passText) hasDriversLiscence = true;
// if (hasDriverLiscence) console.log('I can drive :D');


//FUNTION DECLRATION
function logger() {
    console.log('My name is Ridwan');
}
// calling, running or invoking the function
logger();
logger();
logger();


// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(4, 7);
// console.log(appleOrangeJuice);

// const orangeAppledrink = fruitProcessor(10, 20);
// console.log(orangeAppledrink);

//Number function convert string to number.
// const num = Number('23');
// console.log(num);

//FUNCTION DECLARATION
// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }
// const age1 = calcAge1(1997);
// // console.log(age1);

// //FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear;
// }

// const age2 = calcAge2(1995);

// const calcAge3 = function (birthYear) {
//     return 2024 - birthYear;
// }

// const age3 = calcAge3(1990);

// console.log(age1);
// console.log(age2);
// console.log(age3);





//ARROW FUNCTION
// const calcAge4 = birthYear => 2037 - birthYear;
// const age4 = calcAge4(1996);
// console.log(age4);

// const calcAge5 = birthYear => 2024 - birthYear;
// const age5 = calcAge5(1987);
// console.log(age5);


// const yearsOfRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirementAge = 65 - age;
//     return retirementAge;
// }
// console.log(yearsOfRetirement(1990))

// const yearsOfRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirementAge = 65 - age;
//     return `${firstName} will retire in ${retirementAge} years!`;
// }
// console.log(yearsOfRetirement(1990, 'Jonas'));
// console.log(yearsOfRetirement(1993, 'Drey'));
// console.log(yearsOfRetirement(1990, 'joe'));



//FUNCTION CALLING OTHER FUNCTION
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// };
//         //function name    //parameters
// function fruitProcessor(apples, oranges) {
// const applePieces = cutFruitPieces(apples);
// const orangePieces = cutFruitPieces(oranges);

//     const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// };
// console.log(fruitProcessor(2, 3));





// //ARRAYS
// // const friends = ['Micheal', 'steven', 'Peter']; //literal syntax
// // console.log(friends);

// // const years = new Array(1991, 1992, 1993, 1994, 2000);

// // //calling Arrays elements
// // console.log(friends[0]);
// // console.log(friends[2]);

// // console.log(years[0]);

// // //actual number of Arrays element
// // console.log(friends.length);
// // console.log(years.length);
// // console.log(friends[friends.length - 1]);

// // friends[2] = 'drey';// changing an array element
// // console.log(friends);
// // friends[3] = 'moe';//adding to array element
// // console.log(friends);

// // const firstName = 'ridwan';
// // const ridwan = [firstName, 'oladoja', 2024 - 1997, 'yrs old', 'is a', 'programmer'];
// // console.log(ridwan);

// //Array Exercise
// const calcAge = function (birthYear) {
// return 2024 - birthYear;
// }
// const year = [1990, 1994, 1987, 1999, 2000, 2001];//Arrays elements

// const age1 = calcAge(year[0]);
// const age2= calcAge(year[1]);
// const age3 = calcAge(year[2]);
// const age4 = calcAge(year[years.length - 1]);
// console.log(age1, age2, age3, age4); //Arrays producing values

// const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2])];
// console.log(ages); //Array producing arrays

// //ARRAY METHODS [BASIC] <ADD ELEMETS>
// const friend = ['Micheal', 'steven', 'Peter'];
// friend.push('Jay'); //PUSH FUNCTION: adds element to the end of the arrays.
// console.log(friend);

//  friend.unshift('james'); //UNSHIFT FUNCTION: adds element to the begining of the arrays.
//  console.log(friend);

//  friend.pop(); //POP FUNCTION: remove the last array element.
//  console.log(friend);

//  friend.shift(); //POP FUNCTION: remove the first array element.
//  console.log(friend);

//  console.log(friend.indexOf('steven')); //REFRENCE an element to it position in the arrays.
//  //OR
//  console.log(friend.includes('steven')); //REFRENCE an element as TRUE or FALSE.
 
// if (friend.includes('steven')) {
//     console.log('You have a friend call steven.');
// } else {
//     console.log("You don't have such friend!");
// }


//CREATING OBJECTS with {} object literal syntax
// const ridwann = {
//     firstName: 'Ridwan',
//     lastName: 'Oladoja',
//     age: '2024 - 1997',
//     friends: ['Micheal', 'ade', 'shola']
// };

//GETTING/RETRIEVING PROPERTY FROM OBJECTS
const ridwann = {
    firstName: 'Ridwan',
    lastName: 'Oladoja',
    age: '2024 - 1997',
    friends: ['Micheal', 'ade', 'shola']
};
console.log(ridwann.firstName); //DOT METHOD ✔
console.log(ridwann['lastName']); //BRACKET METHOD

const nameKey = 'Name';
console.log(ridwann['first' + nameKey]);
console.log(ridwann['last' + nameKey]);

const interestedIn = prompt('What do you intend to know about ridwann? Choose between firstName, lastName, age, friends');
// console.log(ridwann[interestedIn]);

if(ridwann[interestedIn]) {
    console.log(ridwann[interestedIn]);
} else {
    console.log('No such information available now!');
}

//CHANGING/ADDING OBJECT VARIABLES with DOT & BRACKET METHOD
ridwann.location = 'Nigeria';
ridwann['ig'] = '@standardconcept';
console.log(ridwann);
console.log(`${ridwann.firstName} has ${ridwann.friends.length} friends, and his best friend is called ${ridwann.friends[2]}.`);

