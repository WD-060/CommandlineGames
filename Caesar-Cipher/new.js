// Caesar Cipher Program in JavaScript

// Function to encrypt the phrase using Caesar Cipher
function caesarCipher(phrase, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encrypted = '';

    for (let char of phrase) {
        // Check if the character is a letter
        if (alphabet.includes(char.toLowerCase())) {
            // Get the current index of the character in the alphabet
            const isUpperCase = char === char.toUpperCase();
            const currentIndex = alphabet.indexOf(char.toLowerCase());
            // Calculate the new index with the shift
            let newIndex = (currentIndex + shift) % 26;
            if (newIndex < 0) newIndex += 26; // Handle negative shifts
            // Append the encrypted character to the result
            encrypted += isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
        } else {
            // If it's not a letter, just append it as is
            encrypted += char;
        }
    }
    return encrypted;
}

// Main function to run the program
function main() {
    // Welcome message
    console.log("Welcome to the Caesar Cipher Program!");

    // Get inputs from command line arguments
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.log("Please provide a phrase and a shift number.");
        return;
    }

    const phrase = args[0];
    const shift = parseInt(args[1], 10);

    // Validate the phrase and shift number
    if (!phrase.match(/^[a-zA-Z\s]+$/) || isNaN(shift)) {
        console.log("Please enter a valid phrase (letters only) and a valid number for the shift.");
        return;
    }

    // Encrypt the phrase
    const encryptedPhrase = caesarCipher(phrase, shift);
    console.log(`Encrypted Phrase: ${encryptedPhrase}`);
}

// Run the main function
main();