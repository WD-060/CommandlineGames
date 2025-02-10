// Start the game
const start = process.argv.slice(2);


// Declare the valid gestures
const gestures = ["rock", "paper", "scissors"];

// Generate the computer's move - random number as big as the array length
const gameMove = gestures[Math.floor(Math.random() * gestures.length)];

// Get user input and add it to the process.argv array
const playerMove = start[0].toLowerCase();

// Check if the input is part of the valid gestures and if so, reveal choices.
if (playerMove == undefined || playerMove == null) {
  console.log("Let's play RPS! Please enter 'rock', 'paper' or 'scissors'");
} else if(!gestures.includes(playerMove)) {
    console.log("Try again. Please enter 'rock', 'paper' or 'scissors'");
    process.exit ();
} else {
  console.log(`you chose: ${playerMove} and I choose: ${gameMove}`);
}
// Compare choices

if  (playerMove === gameMove) {
  console.log("It's a tie!");
} else if (
   playerMove === gestures[1] && gameMove === gestures[0] ||
   playerMove === gestures[2] && gameMove === gestures[1] || 
   playerMove === gestures[0] && gameMove === gestures[2]
  )
 {
  console.log("Yay, you win!");
} else {
  console.log("Yay, I win!");      
}
