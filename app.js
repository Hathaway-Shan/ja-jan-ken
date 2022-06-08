// import needed modules
import { getRandomItem, score } from './utils.js';
// state
const throws = ['rock', 'paper', 'scissors']
let total = 0;
let wins = 0;
let losses = 0;
let draws = 0;
let rock = 0;
let paper = 0;
let scissors = 0;
let mode = 'playing';

// game logic
let computerChoice = '';
let playerChoice = '';

function jaJanKen() {

    computerChoice = getRandomItem(throws);
    const result = score(playerChoice, computerChoice);
    mode = 'not-playing';
    if (result === 1) {
        wins++;
    } else if (result === -1) {
        losses++;
    } else if (result === 0) {
        draws++;
    }
    total++;
    
    displayResults();
    playerSelect();
    modeToggle();
    setTimeout(() => {
        mode = 'playing';
        modeToggle();
    },
    3000);    
}

function playerSelect() {

    if (playerChoice === 'rock') {
        rock++;
    } else if (playerChoice === 'paper') {
        paper++;
    } else if (playerChoice === 'scissors') {
        scissors++;
    }
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
const rockDisplay = document.getElementById('rock-display');
const paperDisplay = document.getElementById('paper-display');
const scissorsDisplay = document.getElementById('scissors-display');
        // scoreboard
function displayResults() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawDisplay.textContent = draws;
    totalDisplay.textContent = total;
    scissorsDisplay.textContent = scissors;
    rockDisplay.textContent = rock;
    paperDisplay.textContent = paper;
}
const outcomeImages = document.getElementById('outcome-images')

// mode switcher between a playing and non playing state
function modeToggle() {
    if (mode === 'playing') {
        outcomeImages.classList.add('hidden');
    } else {outcomeImages.classList.remove('hidden');
    }
}

    // optional: subscribe to events
        // event handlers - what needs to happen?

        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions

// timeout = setTimeout(resetClasses, 2000);


