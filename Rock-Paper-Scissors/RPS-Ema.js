const args = process.argv.slice(2);


const game = function() {
    const moves = ['rock', 'paper', 'scissors'];
    let computer = moves[Math.random() * moves.length];
    let player = moves[];
    if (computer === player) {
        return `The computer chose ${computer}. You also chose ${player}. We have a draw.`;
    } else if (computer == 'paper' && player == 'rock' || computer == 'scissors' && player == 'paper' || computer == 'rock' && player = 'scissors') {
        return `The computer chose ${computer}. You chose ${player}. The computer wins.`;
    } else if (computer == 'rock' && player == 'paper' || computer == 'paper' && player == 'scissors' || computer == 'scissors' && player = 'paper') {
        return `The computer chose ${computer}. You chose ${player}. You win.`;
    } else {
        return `Something has gone horribly wrong.`
    };    
    };



// let player;
// let computer;

// if (player = 'rock' == true && computer = 'paper' == true) {
//     return `Fuck you.`
// };