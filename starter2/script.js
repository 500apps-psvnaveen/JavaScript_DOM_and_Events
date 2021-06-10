'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = true;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);
    // 2. Display dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1 
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        //current0El.textContent = currentScore; // CHANGE LATER
        if (activePlayer) {
            current0El.textContent = currentScore;
            //player0.classList.add('player--active');
            //player1.classList.remove('player--active');
            //currentScore = 0;
            //current0El.textContent = currentScore;
            //activePlayer = false;

        } else {
            current1El.textContent = currentScore;
            player0.classList.remove('player--active');
            player1.classList.add('player--active');
            //currentScore = 0;
            //current1El.textContent = currentScore;
            //activePlayer = true;
        }
    } else {
        //switch to next player
        if (activePlayer) {
            player1.classList.add('player--active');
            player0.classList.remove('player--active');
            currentScore = 0;
            current0El.textContent = currentScore;
            activePlayer = false;
        } else {
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
            currentScore = 0;
            current1El.textContent = currentScore;
            activePlayer = true;
        }

    }
});

btnHold.addEventListener('click', function () {
    if (activePlayer) {
        player1.classList.add('player--active');
        player0.classList.remove('player--active');
        score0El.textContent = Number(score0El.textContent) + Number(current0El.textContent);
        currentScore = 0;
        current0El.textContent = currentScore;
        activePlayer = false;
    } else {
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
        score1El.textContent = Number(score1El.textContent) + Number(current1El.textContent);
        currentScore = 0;
        current1El.textContent = currentScore;
        activePlayer = true;
    }
});

btnNew.addEventListener('click', function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
});
