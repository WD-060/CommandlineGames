const rpsChoice = process.argv.slice(2);

const randomTextGenerator = ["rock", "paper", "scissors"];
const randomIndGenerator = Math.floor(
  Math.random() * randomTextGenerator.length
);

const compChoice = randomTextGenerator[randomIndGenerator];
const userChoice = rpsChoice[0].toLowerCase();

if (!randomTextGenerator.includes(userChoice)) {
  console.log(
    "Invalid choice! Please choose between rock, paper, or scissors."
  );
  process.exit();
}

if (userChoice === "rock" && compChoice === "Scissors") {
  console.log(`You win, You chose ${userChoice}, computer chose ${compChoice}`);
} else if (userChoice === "paper" && compChoice === "Rock") {
  console.log(`You win, You chose ${userChoice}, computer chose ${compChoice}`);
} else if (userChoice === "scissors" && compChoice === "Paper") {
  console.log(`You win, You chose ${userChoice}, computer chose ${compChoice}`);
} else if (userChoice === compChoice.toLowerCase()) {
  console.log(`It's a tie! Both chose ${userChoice}`);
} else {
  console.log(
    `You lose, You chose ${userChoice}, computer chose ${compChoice}`
  );
}
