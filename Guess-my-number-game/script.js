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
const secretNumber = Math.trunc(Math.random() * 20 + 1); //Random Numbers betwwen 1-20
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '😞 Too High! Try Again.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😟 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😞 Too Low! Try Again.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😟 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
