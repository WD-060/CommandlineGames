const etplGame = process.argv.slice(2);

const userWords = etplGame[0].toLowerCase().split(" ");

const lettersArray = userWords.map((word) => word.split(""));

const translatedWords = () => {
    const translatedSentence = [];
  for (let i = 0; i < lettersArray.length; i++) {
      if (lettersArray[i][0] === "a" || lettersArray[i][0] === "u" || 
        lettersArray[i][0] === "i" || lettersArray[i][0] === "o" || lettersArray[i][0] === "e") {
        translatedSentence[i] = lettersArray[i].concat("way").join("");

      } else if (lettersArray[i][1] !== "a" && lettersArray[i][1] !== "u" && 
        lettersArray[i][1] !== "i" && lettersArray[i][1] !== "o" && lettersArray[i][1] !== "e") {
        const removedConstantLetters = lettersArray[i].splice(0,2);
        translatedSentence[i] = lettersArray[i].concat(removedConstantLetters.join("") + "ay").join("");
        

      } else {
        const removedConstantLetters = lettersArray[i].splice(0,1);
        translatedSentence[i] = lettersArray[i].concat(removedConstantLetters + "ay").join("");
      }
  }
  return translatedSentence.join(" ");
};

console.log(`translated sentence: ${translatedWords()}`);
