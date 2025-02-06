//To make use of the command-line arguments, you typically slice the first two elements off the array.
const args = process.argv.slice(2);

// Checking if the user provided exactly one argument
if (args.length !== 1) {
    console.error('Please make your move just one time');
    return;
}

// The program should take the player’s move as an input from process.argv.
const rockPaperScissors = ['rock', 'paper', 'scissors'];

rockPaperScissors.forEach((move) => {

    // Check if the user provided exactly "rock", "paper", or "scissors"
    if (args[0].toLowerCase() === move) {
        console.log(`You chose ${args[0]}`);

        // Generate a random move for the computer
        const randomIndex = Math.floor(Math.random() * rockPaperScissors.length);
        const computerMove = rockPaperScissors[randomIndex];
        console.log(`Computer chose ${computerMove}`);

        // Compare the moves and determine the winner
        if (args[0].toLowerCase() === computerMove) {
            console.log('It\'s a tie!');      
        } else if (
            (args[0].toLowerCase() === 'rock' && computerMove === 'scissors') ||
            (args[0].toLowerCase() === 'paper' && computerMove === 'rock') ||
            (args[0].toLowerCase() === 'scissors' && computerMove === 'paper')
        ) {
            console.log('You win!');
        } else {
            console.log('You lose!');
        }
    }
});

// If the user did not provide exactly "rock", "paper", or "scissors"
console.error('Please provide a valid move: rock, paper, or scissors');
