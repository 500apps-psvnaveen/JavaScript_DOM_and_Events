'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // console.log(document.querySelector('.number').textContent);
// // console.log(document.querySelector('.score').textContent);

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

const numGussing = function (str1) {
    if (score > 1) {
        document.querySelector('.message').textContent = str1;
        --score;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '🤞 You Lost The Game';
    }
}

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);
    //when these is no input
    if (!guess) {
        document.querySelector('.message').textContent = '😒 No Number Entered!';
        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '👏 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > hightscore) {
            hightscore = score;
            document.querySelector('.highscore').textContent = score;
        }
        //when guess is too high
    } else if (guess > secretNumber) {
        numGussing('🤷‍♂️ Too high!');
        //when guess is too low
    } else if (guess < secretNumber) {
        numGussing('🤦‍♂️ Too low!');
    }
})

document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';


})