// import needed modules
import { getRandomItem, score } from './utils.js';
// state
const throws = ['rock', 'paper', 'scissors'];
let total = 0;
let wins = 0;
let losses = 0;
let draws = 0;
let rock = 0;
let paper = 0;
let scissors = 0;
let mode = 'playing';
let result = 0;

// game logic
let computerChoice = '';
let playerChoice = '';

function jaJanKen() {

    computerChoice = getRandomItem(throws);
    result = score(playerChoice, computerChoice);
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
const outcomeImages = document.getElementById('outcome-images');
const throwContainer = document.getElementById('throw-options');
const outcomeDisplay = document.getElementById('draw');
const resultDisplay = document.getElementById('result-display');

// mode switcher between a playing and non playing state
const rockImage = 'https://tinyurl.com/3hvhaa45';
const paperImage = 'https://tinyurl.com/ms4zp7xf';
const scissorsImage = 'https://tinyurl.com/d2vu65rr';
const winImage = 'https://lh3.googleusercontent.com/EuHXzjCSUANikbH2daTo1_Vnmld9TOLOVj78WwX46Yx3lFPMZEScvtsXDN4FwN8ncZCAJt1nejfEM2MONjYLcbC7QKozvhx5X7kL0KALmKQkrYdUHGS-k2YmqWas_ij2Dc1WTHGBPQ=w437-h315-p-k';
const loseImage = 'https://lh3.googleusercontent.com/75Bf0Xhuclts7oEKQmaq-WSaCwppJ6eAtE4rbrjrNNKhhSzZ8GgoFbE25hLt3ZFCJdtoPSro7qXDizzQujU1qcB-NOIg5Jtg3Nj4zP-m4GWmRyPWMjhrBTRT9d2G-7sMo8cEFMjsJw=w437-h315-p-k';
const drawImage = 'https://lh3.googleusercontent.com/UO_WVPgLYnKbZOo4DJ5y5VPP2DRzNRmsQ-W-px67G7mYCLOMkj6vXQRL97QGHeGNeGk5ZzQZTmhTiBDe8EiB5v17iLryKt-tyZJzrJCsSaJUwzsGpo3kRtTPpsY5EPhqatwLx0o_CQ=w600-h315-p-k';
const playerDisplay = document.getElementById('player-display');
const computerDisplay = document.getElementById('computer-display');


function modeToggle() {
    if (mode === 'playing') {
        outcomeImages.classList.add('hidden');
        throwContainer.classList.remove('hidden');
    } else {outcomeImages.classList.remove('hidden');
        throwContainer.classList.add('hidden');
    }
    // player choice display
    if (playerChoice === 'rock') {
        playerDisplay.src = rockImage;
    } 
    else if (playerChoice === 'paper') {
        playerDisplay.src = paperImage;
    }
    else {
        playerDisplay.src = scissorsImage;
    }
    //computer choice display
    if (computerChoice === 'rock') {
        computerDisplay.src = rockImage;
    } 
    else if (computerChoice === 'paper') {
        computerDisplay.src = paperImage;
    }
    else {
        computerDisplay.src = scissorsImage;
    }
    //win loss center display
    if (result === 1) {
        resultDisplay.textContent = 'Wins';
        outcomeDisplay.src = winImage;
    }
    else if (result === -1) {
        resultDisplay.textContent = 'Losses';
        outcomeDisplay.src = loseImage;
    }
    else {
        resultDisplay.textContent = 'Tie';
        outcomeDisplay.src = drawImage;
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


