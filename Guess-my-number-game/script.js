'use strict';
// //DOM MANIPULATION> Document Object Model
// console.log(document.querySelector('.message').textContent); //calling directly from html
// document.querySelector('.message').textContent = 'correct Number!'; //manipulaying the html content
// console.log(document.querySelector('.message').textContent); //calling after manipulation
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//USING EventListner
const number = Math.random(cd)

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
});
