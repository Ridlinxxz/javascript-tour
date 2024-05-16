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


function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(4, 7);
console.log(appleOrangeJuice);

const orangeAppledrink = fruitProcessor(10, 20);
console.log(orangeAppledrink);

//Number function convert string t number.
const num = Number('23');
console.log(num);

//FUNCTION DECLARATION
function calcAge1(birthYear) {
    return 2024 - birthYear;
}
const age1 = calcAge1(1997);
// console.log(age1);

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge2(1995);

const calcAge3 = function (birthYear) {
    return 2024 - birthYear;
}

const age3 = calcAge3(1990);

console.log(age1);
console.log(age2);
console.log(age3);
