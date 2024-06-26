'use strict';

// const x = 23;
// if (x === 23) console.log(23);

// const calAge = (birthYear) => 2037 - birthYear;

// console.log(calAge(1990));

//Exercise (1)
//we work for a company building a smart home thermometer. Our most recent task is this:"Given an array of temprartures of one day, calculate the tempearature amplitude. Keep in mind that sometimes there might be a sensor error."

const tempearatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temp amplitude? Answer: diff btw highest and lowest temp.
// - How to compute max and min temprature?
// - What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find the min value in temp array
// - Subtract min from max (amplitude) and return it.

const calTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; //avoiding thr "error"

    if (curTemp > max) max = curTemp; //finding max value
    if (curTemp < min) min = curTemp; //finding min value
  }
  console.log(max, min);
  return max - min; //subtracting min from max value
};
const amplitude = calTempAmplitude(tempearatures); //the current max declared was the first element of the array, the for loop will therefore look through the array element and determine which other element is greater than the first array element, if TRUE, then max should be the new element dectected.
console.log(amplitude);

//Exercise (2)
//function should now receive 2 arrays of temps

// 1) understand the problem
// - With 2 arrays, should we implement functionality twice? NO! just merge two arrays

// 2) Breaking up into sub-problems
// - Merge two arrays?

const calTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2); //CONCAT METHOD; merging two arrays together
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; //avoiding thr "error"

    if (curTemp > max) max = curTemp; //finding max value
    if (curTemp < min) min = curTemp; //finding min value
  }
  console.log(max, min);
  return max - min; //subtracting min from max value
};
const amplitudeNew = calTempAmplitudeNew([1, 2, 3], [4, 5, 6]);
console.log(amplitudeNew);
