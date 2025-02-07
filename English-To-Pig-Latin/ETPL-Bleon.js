const word = process.argv[2];

const vowels = ["a", "e", "i", "o", "u"];

const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const vowelSplit = function () {
  if (vowels.includes(word.charAt(0).toLowerCase())) {
    return word.toLowerCase() + "way";
  }
  return null;
};

const consonantSplit = function () {
  if (consonants.includes(word.charAt(0).toLowerCase())) {
    return word.slice(1).toLowerCase() + word.slice(0, 1).toLowerCase() + "ay";
  }
  return null;
};

const twoConsonantsSplit = function () {
  if (
    consonants.includes(word.charAt(0).toLowerCase()) &&
    consonants.includes(word.charAt(1).toLowerCase())
  ) {
    return word.slice(2).toLowerCase() + word.slice(0, 2).toLowerCase() + "ay";
  }
  return null;
};

const pigLatinTransformer = function (word) {
  let result = vowelSplit(word);
  if (!result) {
    result = twoConsonantsSplit(word);
  }
  if (!result) {
    result = consonantSplit(word);
  }

  return result || "Invalid input, please choose another word !";
};

console.log(pigLatinTransformer(word));
