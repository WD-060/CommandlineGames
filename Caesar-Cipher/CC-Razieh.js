const ccGame = process.argv.slice(2);

const userPhrase = ccGame[0].toLowerCase();
const shiftNum = ccGame[1];

const alphabet = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
  "r","s","t","u","v","w","x","y","z",
];

const userWords = userPhrase.split(" ");

const changedSentence = userWords.map((word) => {
  const lettersArray = word.split("");
        const changedWord = lettersArray.map(letter => {
            const letterIndex = alphabet.indexOf(letter);
            let newIndex = parseInt(letterIndex) + parseInt(shiftNum);
            if(newIndex < 0){
                newIndex += alphabet.length;
            }else if(newIndex > 25)
                newIndex -= alphabet.length;
                
            return alphabet[newIndex];

        });
         return changedWord.join("");

});

console.log(changedSentence.join(" "));
