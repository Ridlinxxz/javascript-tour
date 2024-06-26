// itteration LOOPS is use for repetitive object

// 'for' loops keeps running while the condition is TRUE
for (let rep = 1; rep <= 20; rep++) {
  //  console.log('Lifting weights repetition 1');
  console.log(`Lifting weights repetition ${rep} times.`);
}

// const ridwan = [
//         'Ridwan',
//         'Oladoja',
//         2024 - 1997,
//         'designer',
//         ['Micheal', 'ade', 'shola'],
//         true
// ];
// const types = [];

// for (let i = 0; i < ridwan.length; i++) {
//     //Reading from ridwan array
//     console.log(ridwan[i], typeof ridwan[i]);

//     //Filling types array
//     types[i] = typeof ridwan[i];
// }
// console.log(types);

// //FOR example
// const yearss = [1991, 2007, 1969, 2020];
// const agess = [];

// for (let i = 0; i < yearss.length; i++) {
//    agess.push(2024 - yearss[i]);
// }
// console.log(agess);

// //continue and break
// console.log('---ONLY STRINGS---')
// for (let i = 0; i < ridwan.length; i++) {
//     if(typeof ridwan[i] !== 'string') continue;     //CONTINUE STATEMENT = if the next element is not a string then skip and continue with the next string elements

//     console.log(ridwan[i]);
// }

// console.log('---BREAK WITH NUMBER---')
// for (let i = 0; i < ridwan.length; i++) {
//     if(typeof ridwan[i] === 'number') break;     //BREAK STATEMENT = if the next element is a NUMBER then break the whole loop process

//     console.log(ridwan[i], typeof ridwan[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//    ages.push(2024 - years[i]);
// }
// console.log(ages);

//CREATING BACKWARDS LOOPS
// const ridwan = [
//         'Ridwan',
//         'Oladoja',
//         2024 - 1997,
//         'designer',
//         ['Micheal', 'ade', 'shola'],
//         true
// ];

// for (let i = ridwan.length-1; i >= 0; i--) {
//     console.log(ridwan[i]);
// }

//CREATING LOOP INSIDE LOOP
// for (let exercise = 1; exercise < 5; exercise++) {
//     console.log(`-------Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 5; rep++) {
//         console.log(`Exercise ${exercise}: Pump push up ${rep}🏋️‍♂️ times.`);
//     }
// }

//WHILE LOOP
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} times.`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
