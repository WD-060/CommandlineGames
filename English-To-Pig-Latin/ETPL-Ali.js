//To make use of the command-line arguments, you typically slice the first two elements off the array.
const args = process.argv.slice(2); // Extracts user input from command-line arguments, ignoring the first two elements (which are `node` and script filename).

// Define vowels array
const vowels = ["a", "e", "i", "o", "u"];

// Create an empty array to store Pig Latin words
const pigLatin = [];

for (const arg of args) { // Loop through each command-line argument (word)
    const word = arg.toLowerCase(); // Convert the word to lowercase to ensure case insensitivity
    
    // Case 1: If the word starts with a vowel, add "way" at the end
    if (vowels.includes(word[0])) {
        pigLatin.push(`${word}way`); // Append the modified word to the pigLatin array
    }

    // Case 2: If the word starts with two consonants
    if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
        let newWord = `${word.slice(2)}${word.slice(0, 2)}ay`; // Move the first two consonants to the end and add "ay"

        preserveCapitalization(arg, newWord); // Use the helper function to preserve capitalization
    }

    // Case 3: If the word starts with a single consonant followed by a vowel
    if (!vowels.includes(word[0]) && vowels.includes(word[1])) {
        let newWord = `${word.slice(1)}${word.charAt(0)}ay`; // Move the first consonant to the end and add "ay"

        preserveCapitalization(arg, newWord); // Use the helper function to preserve capitalization
    }
    
}
// Print the translated Pig Latin phrase by joining the words with spaces
console.log(pigLatin.join(" "));

/**
 * Helper function to capitalize the first letter of a word.
 * @param {string} value - The word to capitalize
 * @returns {string} - The word with the first letter capitalized
 */
function capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * Helper function to preserve the capitalization of the original word.
 * @param {string} original - The original input word
 * @param {string} modified - The transformed Pig Latin word
 */
function preserveCapitalization(str1, str2) {
    if (str1.charAt(0) === str1.charAt(0).toUpperCase()) {
        let capitalized = capitalizeFirstLetter(str2); // Capitalize the first letter
        pigLatin.push(capitalized);
    }else {
        pigLatin.push(str2);
    }
}