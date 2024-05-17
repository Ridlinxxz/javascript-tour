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

//Number function convert string t number.
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
function cutFruitPieces(fruit) {
    return fruit * 4;
};
        //function name    //parameters
function fruitProcessor(apples, oranges) {
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
};
console.log(fruitProcessor(2, 3));






