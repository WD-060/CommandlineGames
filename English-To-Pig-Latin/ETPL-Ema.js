const pigLatin = () => {

    const args = process.argv.slice(2);
    if(args !== '') {
        console.error('Please use the English alphabet only. Motherfucker.');

    const translate = (text, bastardization) => {
        const consonants = ['b', 'c', 'd', 'f', 'g', 'l', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
        let input = "${args[0]}"; // define input to use process.argv? is the string necessary?
        let output = ""; // empty to fill in text in the output

        // if the first two positions are consonant and a vowel, move the first position to last and add ay. now how the fuck to define letters 1 and 2 in a string
        if((text.charAt(0) == consonants[]) && (text.charAt(1) == vowels[]))






    }




}


}






// if the first two positions in the input are consonants, remove both from the beginning and move them to the end. append ay

//if the first position is a vowel, append way at the end