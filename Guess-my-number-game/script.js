'use strict';

// //DOM MANIPULATION> Document Object Model
// console.log(document.querySelector('.message').textContent); //calling directly from html
// document.querySelector('.message').textContent = '🏆 correct Number!'; //manipulaTing the html content
// console.log(document.querySelector('.message').textContent); //calling after manipulation
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//USING EventListner
let secretNumber = Math.trunc(Math.random() * 20 + 1); //Random Numbers betwwen 1-20
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }
  //WHEN THE PLAYER WINS
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      //score value is stil greater than 1
      document.querySelector('.message').textContent =
        '😞 Too High! Try Again.';
      score--; //decreasing the SCORE value by 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😟 You lost the game!';
      document.querySelector('.score').textContent = 0; //change the score value to 0
    }
  }
  //WHEN GUESS IS TOO LOW
  else if (guess < secretNumber) {
    if (score > 1) {
      //score value is stil greater than 1
      document.querySelector('.message').textContent = '😞 Too Low! Try Again.';
      score--; //decreasing the SCORE value by 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😟 You lost the game!';
      document.querySelector('.score').textContent = 0; //change the score value to 0
    }
  }
});
//Try Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20 + 1); //Random Numbers betwwen 1-20

  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start Guessing!';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
