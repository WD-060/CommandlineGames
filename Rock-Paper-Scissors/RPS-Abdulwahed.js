const choices = ["rock", "paper", "scissors"];

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(user, computer) {
    if (user === computer)
         { return "It's a tie!"; }
    else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You win!";
    }
    else {
    return "Oh no, You lose!";}
}

// Get user input from command line arguments
const userInput = process.argv[2]?.toLowerCase();

if (!choices.includes(userInput)) {
    console.log("Please choose between 'rock', 'paper', or 'scissors'.");
    process.exit(1);
}

const computerChoice = getRandomChoice();

console.log(`You chose: ${userInput}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(getWinner(userInput, computerChoice));
