'use strict'; //ACTIVATED SCRIPT MODE ALL THROUGH THE CODE.

// let hasDriverLiscence = false;
// const passText = true;

// if (passText) hasDriversLiscence = true;
// if (hasDriverLiscence) console.log('I can drive :D');

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