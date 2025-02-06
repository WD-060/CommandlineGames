const rpsGame = process.argv.slice(2);

const rpsItems = ["rock", "paper", "scissors"];

const userItem = rpsGame[0].toLowerCase();

const programItem = rpsItems[Math.floor(Math.random() * rpsItems.length)];

console.log(`your choice is: ${userItem}`);
console.log(`systems choice is: ${programItem}`);

if (userItem === programItem) {
  console.log("draw");
} else if (
  (userItem === "paper" && programItem === "rock") ||
  (userItem === "rock" && programItem === "scissors") ||
  (userItem === "scissors" && programItem === "paper")
) {
  console.log("win");
} else 
        {console.log("lose");}
