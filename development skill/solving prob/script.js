'use strict';

// const x = 23;
// if (x === 23) console.log(23);

// const calAge = (birthYear) => 2037 - birthYear;

// console.log(calAge(1990));

// Exercise (1)
// we work for a company building a smart home thermometer. Our most recent task is this "Given an array of temprartures of one day, calculate the tempearature amplitude. Keep in mind that sometimes there might be a sensor error."

// const tempearatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temp amplitude? Answer: diff btw highest and lowest temp.
// - How to compute max and min temprature?
// - What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find the min value in temp array
// - Subtract min from max (amplitude) and return it.

// const calTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue; //avoiding the "error"

//     if (curTemp > max) max = curTemp; //finding max value
//     if (curTemp < min) min = curTemp; //finding min value
//   }
//   console.log(max, min);
//   return max - min; //subtracting min from max value
// };
// const amplitude = calTempAmplitude(tempearatures); //the current max declared was the first element of the array, the for loop will therefore look through the array element and determine which other element is greater than the first array element, if TRUE, then max should be the new element dectected.
// console.log(amplitude);

//Function receving 2 arrays of temps
//solution: merge the two arrays together
//Merging 2 arrays together> usig concat method
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// const calTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);//concat method
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue; //avoiding the "error"

//     if (curTemp > max) max = curTemp; //finding max value
//     if (curTemp < min) min = curTemp; //finding min value
//   }
//   console.log(max, min);
//   return max - min; //subtracting min from max value
// };
// const amplitudeNew = calTempAmplitudeNew([3, 5, 1], [9, 0, 5]); //the current max declared was the first element of the array, the for loop will therefore look through the array element and determine which other element is greater than the first array element, if TRUE, then max should be the new element dectected.
// console.log(amplitudeNew);

// DEBUGGING WITH CONSOLE AND BREAKPOINTS
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     //value: prompt('Degrees celcius), <BUG>

//     // C) Fix bug
//     // value: Number(prompt('Degrees celcius')),
//     value: 10,
//   };
//   //B) find the bug
//   console.table(measurement);

//   const Kelvin = measurement.value + 273;
//   return Kelvin;
// };
// // A) Identify the bug
// console.log(measureKelvin());

// //DEBUGGING WITH DEBUGGER
// const calTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2); //concat method
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue; //avoiding the "error"

//     // debugger;
//     if (curTemp > max) max = curTemp; //finding max value
//     if (curTemp < min) min = curTemp; //finding min value
//   }
//   console.log(max, min);
//   return max - min; //subtracting min from max value
// };
// const amplitudeBug = calTempAmplitudeBug([3, 5, 1], [9, 4, 5]); //the current max declared was the first element of the array, the for loop will therefore look through the array element and determine which other element is greater than the first array element, if TRUE, then max should be the new element dectected.
// //A) IDENTIFY BUG
// console.log(amplitudeBug);

