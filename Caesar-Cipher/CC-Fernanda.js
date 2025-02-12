//Step 1: get input and declare constants
const args = process.argv.slice(2);
const text = args[0];
//Ensure that the entered shift can be read by the program
const shift = parseInt(args[1], 10);

//Step 2: create alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";


// };  
// Step 3: build the encryption function
function CCipher(text, shift) {
    let encrypted = "";
    // Check if the character is a letter
    for (let char of text) {
        if (alphabet.includes(char.toLowerCase())) {
            // Get the current index of the character in the alphabet
            const isUpperCase = char === char.toUpperCase();
            const currentIndex = alphabet.indexOf(char.toLowerCase());
            // Calculate the new index with the shift
            let newIndex = (currentIndex + shift) % 26;
            // Calculate negative shift inputs
            if (newIndex < 0) newIndex += 26;
            // Assign the new character to the encrypted text
            // If the input character is upper case, this beautiful ternary operation will keep it in upper case:
            encrypted += isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
        } else {
            // If it's not a letter, the charcter will be added as it is to the encrypted word
            encrypted += char;
        }
    }
    return encrypted;
}

// Step 4: build the main function to run the program:
function program() {
    //Greeting and instrctions
    console.log("Welcome to the Caesar Cipher Program!");
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.log("Please provide a phrase in quotation marks and a shift number.")
        return;
    }
    // Validate that thed shift is a number
    if (isNaN(shift)) {
        console.log("Please enter a valid number for the shift.");
        return;
    }
    // Calling the encryption function
    const encryptedPhrase = CCipher(text, shift);
    console.log("Encrypted Phrase: " + encryptedPhrase + "\nYou are welcome!");
}

program();