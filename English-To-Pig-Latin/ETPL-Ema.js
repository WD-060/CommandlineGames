const pigLatin = () => {




    const args = process.argv.slice(2);
    // we try to check if the given argument is empty?
    if(false && args !== '') {
        console.error('Please use the English alphabet only. Motherfucker.');
        return;
    }

    const cond1 = false;
    const cond2 = false;

    let isFirstLetterVowel = undefined;
    const myString = args[0];
    console.log(myString)
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    vowels.forEach((letter, index) => {
        if (isFirstLetterVowel == true) {
            return;
        }
        isFirstLetterVowel = letter == myString[0]; // 'a' == 'e'
    })

    

    if (cond1) {
        console.log('cond1');
    } else if (cond2) {
        console.log('cond2');
    } else if (isFirstLetterVowel) {
        const value = myString.slice(1);
        const value2 = myString[0];
        const result = value + value2;
        console.log(result);
    }


}
console.log('new');
pigLatin()




const pigLatin2 = () => {

    const args = process.argv.slice(2);
    if(args !== '') {
        console.error('Please use the English alphabet only. Motherfucker.');
    }

    const translate = () => {
        const consonants = ['b', 'c', 'd', 'f', 'g', 'l', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        let input = "${args[0]}"; // define input to use process.argv? is the string necessary?
        let output = ""; // empty to fill in text in the output

        // if the first two positions are consonant and a vowel, move the first position to last and add ay. now how the fuck to define letters 1 and 2 in a string
        if((input.charAt(0) == input.includes(consonants[999]) === true) && (text.charAt(1) == input.includes(vowels[999]) === true)) {
            //instead of text. maybe should be input?
            let removedLetter = input.shift(charAt(0));
            output.push = input.charAt(0);
            console.log((input, "ay").join(""));
        }




     //   if((input.charAt(0).match(/'b' || 'c' || 'd' || 'f' || 'g' || 'l' || 'k' || 'm' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'z'/gi) === true) && (text.charAt(1).match(/'a' || 'e' || 'i' || 'o' || 'u' || 'y'/gi) === true))

    }


}
// console.log('old');
// pigLatin2()





// if the first two positions in the input are consonants, remove both from the beginning and move them to the end. append ay

//if the first position is a vowel, append way at the end

// const emaIncludes = (entireString, firstLettersArray) => {
//     return entireString[0] == firstLettersArray[0] || firstLetterOfTheGivenString == firstLettersArray[1]
// }
// emaIncludes('okan', ['a', 'e']);