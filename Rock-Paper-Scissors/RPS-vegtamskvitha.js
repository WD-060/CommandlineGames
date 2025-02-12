const args = process.argv.slice(2); 

function fightTheBeast() {

    const weapons = ["rock", "paper", "scissors"] 
    const defenseWeapon = weapons[Math.floor(Math.random() * weapons.length)]

    console.log(`You draw your ${weapons}, as the vile beast sharpens its ${defenseWeapon}.`);

    if (weapons === defenseWeapon) {
    console.log("You exchanged strikes with the foul beast, but none drew blood!")
    }
else if 
    (weapons === "rock" && defenseWeapon === "scissors" ||
    weapons === "paper" && defenseWeapon === "rock" ||
    weapons === "scissors" && defenseWeapon === "paper")
           {
            console.log("You have slain the beast!")
    }
else {
    console.log("You lay defeated on the ground, as the world darkens around you...")
}
}

fightTheBeast("rock")
fightTheBeast("paper")
fightTheBeast("scissors")