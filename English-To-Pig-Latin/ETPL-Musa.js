const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Please provide a word as an argument.");
  process.exit(1);
}

let pigLatinWord = args[0];

const translateToPigLatin = (word) => {
  if (["a", "e", "i", "o", "u"].includes(word[0].toLocaleLowerCase())) {
    pigLatinWord = word + "way";
  } else {
    if (
      !["a", "e", "i", "o", "u"].includes(word[1].toLocaleLowerCase()) &&
      !["a", "e", "i", "o", "u"].includes(word[2].toLocaleLowerCase())
    ) {
      pigLatinWord = word.slice(3) + word.slice(0, 3) + "ay";
    } else {
      pigLatinWord = word.slice(2) + word.slice(0, 2) + "ay";
    }
  }
  return pigLatinWord;
};

console.log(translateToPigLatin(pigLatinWord));

// console.log(translateToPigLatin("Charles"));
// console.log(translateToPigLatin("Musa"));
// console.log(translateToPigLatin("Oluwafemi"));
