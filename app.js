// import needed modules
import { getRandomItem, score } from './utils.js';
// state
const throws = ['rock', 'paper', 'scissors']
let total = 0;
let wins = 0;
let losses = 0;
let draws = 0;
let timeout = 0;
let computerChoice = '';
let playerChoice = '';
let choice = true;
// components

    // component
    // define and grab DOM elements

    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?

        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

scissorsButton.addEventListener('click', () => {
    handleGuess('scissors');
});

paperButton.addEventListener('click', () => {
    handleGuess('paper');
});

rockButton.addEventListener('click', () => {
    handleGuess('rock');
});
// timeout = setTimeout(resetClasses, 2000);


