const args = process.argv.slice(2);

let userChoice = args[0];
let computerChoice;

const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return "Draw";
  }else if(userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "rock") {
    return "User wins";
  }else {
    return "Computer wins";
  }
};

const playGame = () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(`Result: ${result}`);
};

playGame();