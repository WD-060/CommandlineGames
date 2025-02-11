const RPS = () => {
    const args = process.argv.slice(2);

    const game = function() {
        const moves = ['rock', 'paper', 'scissors'];
        const decimalRandom = Math.random() * moves.length; // e.g. 0.21 * 3 = 0.63
        const integerRandom = Math.floor(decimalRandom); // 2
        let computer = moves[integerRandom];
        let player = args[0];

        // RANDOM r p s    terminal
        // console.log(computer, player) - was checking if choices work
        if (computer === player) {
            console.log(`The computer chose ${computer}. You also chose ${player}. We have a draw.`);
        } else if ((computer == 'paper' && player == 'rock') || (computer == 'scissors' && player == 'paper') || (computer == 'rock' && player == 'scissors')) {
            console.log(`The computer chose ${computer}. You chose ${player}. The computer wins.`);
        } else if ((computer == 'rock' && player == 'paper') || (computer == 'paper' && player == 'scissors') || (computer == 'scissors' && player == 'rock')) {
            console.log(`The computer chose ${computer}. You chose ${player}. You win.`);
        } else {
            console.log(`Something has gone horribly wrong.`);
        }
    };

    game()
}


RPS()

