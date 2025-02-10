// English to Pig Latin
// 1. Declare the arrays with all possible letters:

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

// Declare that the result will be an empty array
const pigLatin = [];

// Take an english phrase as an imput from process.argv and convert it to lower case
const words = process.argv.slice(2);

// Converting each word to Pig Latin
function translation (sentence) {
    return sentence.split(" ").map(word => {
        const firstLetter = word[0];
        const secondLetter = word[1];

        let pLWord;
        
        if (vowels.includes(firstLetter.toLowerCase())) {
            pLWord = word + "way";
        } else if (vowels.includes(secondLetter.toLowerCase())) {
            pLWord = word.slice(1) + firstLetter + "ay";
        } else {
            pLWord = word.slice(2) + word.slice(0,2) + "ay";
        }
// Preserving the capital letter for proper nouns
        if (firstLetter === firstLetter.toUpperCase()) {
            pLWord = word[0].toUpperCase() + pLWord.slice(1).toLowerCase();
        } else {
            pLWord = pLWord.toLowerCase();
        }

        return pLWord;
    }).join(" ");
}

// Checking if a word contains only vowels and consonants
function validWord(word) {
    for (let char of word.toLowerCase()) {
        if (!vowels.includes(char) && !consonants.includes(char)) {
            return false;
        }
    }
    return true;
}

// Getting the user's input:
const englishSentence = words.join(" ");

if (englishSentence) {
    const parts = englishSentence.split(" ");
    const invalidWords = parts.filter(word => !validWord(word));

    if (invalidWords.length > 0) {
        console.log("Please provide words that include only vowels and consonants. Invalid words: " + invalidWords.join(", "));
    } else {
        const pigLatinSentence = translation(englishSentence);
        console.log(pigLatinSentence);
    }
} else {
    console.log("Welcome to the English - Pig Latin Translation Service. Please provide a sentence to translate.");
}
