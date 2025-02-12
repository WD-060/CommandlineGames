// To make use of the command-line arguments, you typically slice the first two elements off the array.
const args = process.argv.slice(2); // Extracts user input from command-line arguments, ignoring the first two elements (which are `node` and script filename).

// Checking if the user provided exactly two arguments: one string (phrase) and one number (shift value)
if (args.length !== 2) {
    console.error('Please provide exactly two arguments: a phrase and a shift number');
    return;
}

// Define an array containing uppercase letters of the alphabet
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const phrase = args[0]; // Extract the phrase from arguments
const shift = Number(args[1]); // Convert shift value to a number

// Validate if shift is a valid number
if (isNaN(shift)) {
    console.error('Shift value must be a number.');
    return;
}

// Function to encrypt the given text using the Caesar Cipher algorithm
const caesarCipher = (text, shift) => {
    return text.split('').map(char => { // Split text into characters and iterate over each
        const isUpperCase = char === char.toUpperCase(); // Check if the character is uppercase
        const charUpper = char.toUpperCase(); // Convert character to uppercase for uniform processing
        
        if (letters.includes(charUpper)) { // Check if character is a letter
            let index = (letters.indexOf(charUpper) + shift) % 26; // Shift the character position
            if (index < 0) index += 26; // Handle negative shifts by wrapping around
            
            // Return transformed character in original case (uppercase or lowercase)
            return isUpperCase ? letters[index] : letters[index].toLowerCase();
        }
        
        return char; // Keep non-letter characters unchanged (e.g., spaces, punctuation)
    }).join(''); // Reconstruct the encrypted text as a string
};

// Print the encrypted phrase to the console
console.log(caesarCipher(phrase, shift));