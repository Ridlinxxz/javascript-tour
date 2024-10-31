'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0'); //calling for id- using #
const score1EL = document.getElementById('score--1'); //calling for id-
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playerTag1 = document.getElementById('name--0');
const playerTag2 = document.getElementById('name--1');

let scores, currentScore, activePlayer, playing;

//starting conditions & resetting game
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true; //setting if game is still in play

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  playerTag1.textContent = 'Player 1';
  playerTag2.textContent = 'Player 2';
};
init(); //calling the starting condition

//Switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //changing activePlayer with Ternaty operator
  currentScore = 0;
  player0El.classList.toggle('player--active'); //changing the background color of the current active layer
  player1El.classList.toggle('player--active');
}; //toggle add and remove object.

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);

    //2. Display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //Display the image according to the random number generated

    //3. ChecK for rolled.
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice; //Adding current score to the new random number
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
//appointing hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to te score of the active player
    scores[activePlayer] += currentScore;
    // scores[1] = score[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //   currentScore;
    //2. Check if player score is >=100
    if (scores[activePlayer] >= 20) {
      playing = false;
      //finish the game
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.getElementById(`name--${activePlayer}`).textContent = 'WINNER🥇';
    } else {
      //3.switch to the next player
      switchPlayer();
    }
  }
});
//appointing New button
btnNew.addEventListener('click', init);
