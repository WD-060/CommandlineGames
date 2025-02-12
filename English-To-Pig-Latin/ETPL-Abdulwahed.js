function toPigLatin(word) {     

    const vowels = "aeiou"; 
    if (vowels.includes(word[0].toLowerCase())) {  
        return word + "way";
    }
    else {
    let i = 0;
    while (i < word.length && !vowels.includes(word[i].toLowerCase())) { 
        i++;
    }
    return word.slice(i) + word.slice(0, i) + "ay"; 
}
}
console.log(toPigLatin("hello")); // ellohay
console.log(toPigLatin("apple")); // appleway
console.log(toPigLatin("stronge")); // ongestray