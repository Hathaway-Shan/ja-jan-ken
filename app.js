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
    choice = true;
    const result = score(playerChoice, computerChoice);

    if (result === 1) {
        wins++;
    } else if (result === -1) {
        losses++;
    } else if (result === 0) {
        draws++;
    }
    total++;
    console.log(wins, losses, draws);
    displayResults();
    
}

    // component
    // define and grab DOM elements
    // buttons
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
    
scissorsButton.addEventListener('click', () => {
    playerChoice = 'scissors';
    jaJanKen();
});
    
paperButton.addEventListener('click', () => {
    playerChoice = 'paper';
    jaJanKen();
});
    
rockButton.addEventListener('click', () => {
    playerChoice = 'rock';
    jaJanKen();
});


    // display functions
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const drawDisplay = document.getElementById('draws-display');
const totalDisplay = document.getElementById('total-display');
    // throw tracker

        // scoreboard
function displayResults() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawDisplay.textContent = draws;
    totalDisplay.textContent = total;
}

    // optional: subscribe to events
        // event handlers - what needs to happen?

        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions

// timeout = setTimeout(resetClasses, 2000);


