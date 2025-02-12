const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Please provide a phrase as an argument.");
  process.exit(1);
}

const phrase = args.join(" ");
if (!/^[a-zA-Z\s]+$/.test(phrase)) {
  console.error("The phrase must contain only letters and spaces.");
  process.exit(1);
}

const translateToPigLatin = (phrase) => {
  return phrase
    .split(" ")
    .map((word) => {
      if (word.length < 3) {
        console.error(`The word "${word}" must have at least three characters.`);
        process.exit(1);
      }

      if (["a", "e", "i", "o", "u"].includes(word[0].toLowerCase())) {
        return word + "way";
      } else if (
        !["a", "e", "i", "o", "u"].includes(word[0].toLowerCase()) &&
        !["a", "e", "i", "o", "u"].includes(word[1].toLowerCase())
      ) {
        return word.slice(2) + word.slice(0, 2) + "ay";
      } else {
        return word.slice(1) + word.slice(0, 1) + "ay";
      }
    })
    .join(" ");
};

const pigLatinPhrase = translateToPigLatin(phrase);
console.log(pigLatinPhrase);




// console.log(translateToPigLatin("Charles"));
// console.log(translateToPigLatin("Musa"));
// console.log(translateToPigLatin("Oluwafemi"));
