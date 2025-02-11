const pigLatin = () => {

    const args = process.argv.slice(2);
    // we try to check if the given argument is empty?
    // if(false && args !== '') {
    //     console.error('Please use the English alphabet only. Motherfucker.');
    //     return;
    // }

    let isFirstLetterVowel = undefined;
    let isSecondLetterVowel = undefined;
    let isFirstLetterConsonant = undefined;
    let isSecondLetterConsonant = undefined;
    const myString = args[0]; //now how do I get it to repeat for every args after that
    console.log(myString);
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'l', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

    vowels.forEach((letter, index) => { //searches the array
        if (isFirstLetterVowel == true) { //stops searching as soon as a match is found
            return;
        };
        isFirstLetterVowel = letter == myString[0]; //assigns isFirstLetterVowel to the vowel in the first spot

        if (isSecondLetterVowel == true) {
            return;
        };
        isSecondLetterVowel = letter == myString[1];
    });

    consonants.forEach((consonant, index) => {
        if (isFirstLetterConsonant == true) {
            return;
        };
        isFirstLetterConsonant = consonant == myString[0];
        if (isSecondLetterConsonant == true) {
            return;
        };
        isSecondLetterConsonant = consonant == myString[1];
    });

    

    if (isFirstLetterConsonant && isSecondLetterVowel) {
        const removeFirst = myString.slice(1);
        const removedFirst = myString[0];
        const case1 = removeFirst + removedFirst + 'ay';
        console.log(case1);

    } else if (isFirstLetterConsonant && isSecondLetterConsonant) {
        const removeTwo = myString.slice(2);
        const removedTwo = myString[0] + myString[1];
        const case2 = removeTwo + removedTwo + 'ay';
        console.log(case2);

    } else if (isFirstLetterVowel) {
        const vowelResult = myString + 'way';
        console.log(vowelResult);
    };


};

pigLatin();


// not done with includes
// const emaIncludes = (entireString, firstLettersArray) => {
//     return entireString[0] == firstLettersArray[0] || firstLetterOfTheGivenString == firstLettersArray[1]
// }
// emaIncludes('okan', ['a', 'e']);