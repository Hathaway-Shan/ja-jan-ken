export function getRandomItem(array) {
    const random = Math.floor(Math.random() * array.length);
    const item = array[random];
    return item;
}
export function score(playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 1;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 1;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 1;
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return -1;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return -1;
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return -1;
    } else {
        return 0;
    } 
}

