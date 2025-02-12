const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Please provide a phrase and a shift number.");
  process.exit(1);
}

const phrase = args[0];
const shift = parseInt(args[1]);

const translateToCaesarCipher = (phrase, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const shiftNormalized = ((shift % 26) + 26) % 26; 

  return phrase
    .split("")
    .map(char => {
      const lowerChar = char.toLowerCase();
      if (!alphabet.includes(lowerChar)) {
        return char; 
      }
      const newIndex = (alphabet.indexOf(lowerChar) + shiftNormalized) % 26;
      const shiftedChar = alphabet[newIndex];
      return char === char.toUpperCase() ? shiftedChar.toUpperCase() : shiftedChar;
    })
    .join("");
};

const encryptedPhrase = translateToCaesarCipher(phrase, shift);
console.log(encryptedPhrase);

// node caesarCipher.js "hello world" 3
// Output: khoor zruog
