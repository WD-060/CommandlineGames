function toPigLatin(word) {     //The function with one  argument.

    const vowels = "aeiou"; // A string "aeiou" is stored in the variable vowels for easy lookup.
    if (vowels.includes(word[0].toLowerCase())) {  //word[0] check first letter of the word. vowels.includes(...) checks if the first letter is a vowel.
        return word + "way";
    }
    else {
    let i = 0;
    while (i < word.length && !vowels.includes(word[i].toLowerCase())) { //Find the first vowel in the word
        i++;
    }
    return word.slice(i) + word.slice(0, i) + "ay"; //gets the part of the word from the first vowel to the end.and gets the leading consonants (before the first vowel).
}
}
console.log(toPigLatin("hello")); // ellohay
console.log(toPigLatin("apple")); // appleway
console.log(toPigLatin("stronge")); // adenway