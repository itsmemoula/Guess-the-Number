'use strict';
let secretnumber = Math.trunc(Math.random() * 20) + 1;

/*Al ways Keep in mind about Code REFACTORING which means DRY Principle
DRY ----->>> DOn't Repeat Yourself ( Duplicate code )*/

/* To see the ouput of this Guess the number Game open this code and click go live on the bottom of the right corner and open the localhost:port with the port number suggested below  */

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  /* A document.querselector() always return a string so that's why in line 16 we converted the result of query selectory to a number using NUMBER keyword */
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input

  if (!guess) {
    //document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');
    // when player wins
  } else if (guess === secretnumber) {
    //document.querySelector('.message').textContent = 'Correct number';

    displayMessage('Correct number');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess !== secretnumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //  guess > secretnumber ? 'Too high' : 'Too Low';
      displayMessage(guess > secretnumber ? 'Too high' : 'Too Low');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the //game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  /* else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
