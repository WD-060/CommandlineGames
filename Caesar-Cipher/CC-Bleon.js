let word = process.argv[2];
let shiftBy = parseInt(process.argv[3]);

if (!word || word.length < 2) {
  console.error("Error: The word must have at least 2 characters.");
  process.exit(1);
}

console.log(`Word: ${word}, Shift: ${shiftBy}`);
const shiftNumber = function (str, shiftBy) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let newCharCode = charCode + shiftBy;

    if (charCode >= 97 && charCode <= 122) {
      newCharCode = ((newCharCode - 97 + 26) % 26) + 97;
    }
    result += String.fromCharCode(newCharCode);
  }
  return result;
};

console.log(shiftNumber(word, shiftBy));
