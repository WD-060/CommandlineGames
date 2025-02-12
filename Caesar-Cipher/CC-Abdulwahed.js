function caesarCipher(str, shift) {
    strUpdate = str.split('').map(char => { 
 
        if (char.match(/[a-z]/i)) {  // Check if it's a letter
            let code = char.charCodeAt(0); // covert to ASCII
            let base;
            if (code >= 65 && code <= 90) {
                base = 65; // Uppercase letters
            } else {
                base = 97; // Lowercase letters
            }
            return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base); // fromCharCode from ASCII to char
        } 
        else return char; 
    }).join('');
    return strUpdate; 
}

console.log(caesarCipher("HELLO", 3)); // "KHOOR"
console.log(caesarCipher("hello world!", 5)); // "mjqqt btwqi!"

