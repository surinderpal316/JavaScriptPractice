let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParse');
const p = document.querySelector('p');

let prevGuess = [];
let numGuess = 0;
let playGame = true;

remaining.textContent = '10'; // Initialize remaining guesses

submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
});

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    prevGuess.push(guess);
    numGuess++;

    if (numGuess === 10) {
        displayGuess(guess);
        displayMessage(`The number of attempts is over. The correct number was ${randomNumber}.`);
        endGame();
    } else {
        displayMessage(guess);
        checkGuess(guess);
        displayGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('Congratulations! You guessed the correct number!');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('The number is too low.');
    } else {
        displayMessage('The number is too high.');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.textContent = prevGuess.join(', '); // Display previous guesses
    remaining.textContent = 10 - numGuess; // Update remaining guesses
}

function displayMessage(message) {
    lowOrHi.textContent = message;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h1>Start New Game</h1>';
    startOver.appendChild(p);
    playGame = false;
    submit.removeEventListener('click', validateGuess); // Remove submit button event listener
    p.addEventListener('click', newGame); // Add event listener for new game button
}

function newGame() {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.textContent = '';
    remaining.textContent = '10';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    submit.addEventListener('click', function (e) { // Re-add event listener for submit button
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
