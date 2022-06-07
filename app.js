// import needed modules
import { getRandomItem, score } from './utils.js';
// state
const throws = ['rock', 'paper', 'scissors']
let total = 0;
let wins = 0;
let losses = 0;
let draws = 0;
let timeout = 0;
// game logic
let computerChoice = '';
let playerChoice = '';
let choice = '';

function jaJanKen() {
    computerChoice = getRandomItem(throws);
    let result = score(playerChoice, computerChoice);

    if (result === 1) {
        wins++;
    } else if (result === -1) {
        losses++;
    } else if (result === 0) {
        draws++;
    }
    total++;
}

    // component
    // define and grab DOM elements
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
    
scissorsButton.addEventListener('click', () => {
    jaJanKen('scissors');
});
    
paperButton.addEventListener('click', () => {
    jaJanKen('paper');
});
    
rockButton.addEventListener('click', () => {
    jaJanKen('rock');
});
console.log(wins, losses, draws);

    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?

        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions

// timeout = setTimeout(resetClasses, 2000);


