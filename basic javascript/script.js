/*
let js = 'amazing';
 console. log(40+8+23-10);

console.log("ridwan");
console.log(23);

let firstName = "Ridwan";
console.log(firstName);

let person = 'ridwan'
*/

/*let javascriptIsFun = true
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'ridwan');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);*/

/*
let age = 30;
age = 32;
console.log(age)
*/

/*const birthYear = 1991; 
console.log(birthYear)*/

/*
const now = 2037;
const ageRidwan = now - 1991;
const ageSarah = now -  1918;
console.log(ageRidwan, ageSarah);

console.log(ageRidwan * 2, ageRidwan / 10)

const firstName = 'Ridwan';
const lastName = 'Oladoja';
console.log(firstName + ' ' + lastName); 

let x = 10 + 5; // 15
x += 10; //x = 15 + 10 = 25
x *= 4 //x = 25 * 4 = 100
console.log(x);

console.log(ageRidwan > ageSarah);
console.log(ageRidwan >= 46);
*/

/*const now = 2037;
const ageRidwan = now - 1991;
const ageSarah = now -  1918;

console.log(now - 1991 > now - 1918);*/

/*const firstName = 'Ridwan';
const job = 'Designer';
const birthYear = 1997;
const year = 2024
const relationship = 'single';
const home = 'ilorin';

const Ridwan = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old' + ' ' + job + '!'
console.log(Ridwan)

const ridwanNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}! I'm ${relationship} and I live in ${home}`;
console.log(ridwanNew);

console.log(`I am ridwan,
I am a designer,
I lived in ilorin.`)*/

/*const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough) {
console.log('sarah can start driving license 🚗');
}*/

/*const age = 15;

if(age >= 18) {
console.log('sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. wait another ${yearsLeft} years.`);
}*/

/*const birthYear = 1999;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

let n = '5' + 2;
n = n-1;
console.log(n);*/


// faulsy & truthy values

/*const money = 100
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("get urself a job!");
}*/

//==&=== Equality operator
/*const aged = 18;

if (aged === 18) console.log('you are now an adult'); //strict equality operator

if (aged == 18) console.log('you are now an adult'); //loose equlaity operators

const favorite = String(prompt("what's ur favorite name?"))
console.log(favorite);
console.log(typeof favorite);*/

/*if (favorite === 'ridwan') {
    console.log('cool! ridwan is an amazing name!')
} else if(favorite === 'ola') {
    console.log('ola is also a cool name')
} else if(favorite === 'abiodun') {
    console.log('abiodun is also a cool name')
} else if (favorite === 'olaitan') {
    console.log('olaitan is also a cool name')
}
else {
    console.log('you got the name wrong!')
}

if (favorite !== 'ridwan') console.log('why not ridwan?')*/ // not-equal-to operator

/*const ages = 31;
const newAge = 16

if (ages <= 20) {
    console.log('you are right!');
} else {
    console.log(ages-newAge)
}*/


// logical operators; AND, OR, NOT

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision); //AND sign
// console.log(hasDriversLicense || hasGoodVision); //OR sign
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) { //AND declaration
//     console.log('sarah is able to drive');
// } else {
//     console.log('someone else shld drive!');
// }

// const shouldDrives = hasDriversLicense || hasGoodVision;

// if(shouldDrives) { //OR declaration
//     console.log('sarah is able to drive')
// } else {
//     console.log('someone else shld drive!')
// }

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {console.log('sarah is able to drive!');
// } else {
//     console.log('someone else shld drive!');
// }


// THE SWITCH STATEMENT
// const day = 'monday';

// switch(day) {
//     case'monday': //day === 'monday'
//       console.log('plan course structure');
//       console.log('Go to coding meeting');
//       break;
//     case 'tuesday':
//         console.log('prepare a video');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Cook my favorite meal & Go to library');
//         break;
//     case 'friday':
//         console.log('Go to jumat');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Go play basketball');  
//         break;
//     default:
//         console.log('not a vilid day!');
// }

// const day = 'monday';

// if(day === 'monday') {
//     console.log('plan course structure');
// }
// else if (day === 'tuesday') {
//     console.log('prepare a video');
// }
// else if (day === 'wednesday'|| day === 'thursday') {
//     console.log('cook my favorite meal & go to library');
// }
// else if (day === 'friday') {
//     console.log('go to jumat!');
// }
// else if (day === 'saturday' || day === 'sunday') {
//     console.log('Go play basketball');
// }
// else {
//     console.log('not a valid day!');
// }


// THE CONDITIONAL OPERATOR (TERNARY OPERATOR)

const age = 15;
// age >= 18 ? console.log('I like to drink wine🍷'):
// console.log('I like to drink water💧');

const drink = age >= 18 ? 'You are good to go!🍷' : 'You are not matured enough, Drink water.💧';
console.log(drink);


const favname = 'ridwan';

const answer = favname === 'ridwan' ? 'You got my name right!✔' : 'You got my name wrong❌!';
console.log(answer);

