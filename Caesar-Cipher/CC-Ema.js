
const riddleMeThis = (alphabet, shift) => {
    //const args = process.argv.slice(2);
    // const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'v', 'w', 'x', 'y', 'z']; //define letters. apparently not
    let output = ""; // to hold whatever comes out

    // to apply to every letter where the initial shift is 0

    for(let i = 0; i < alphabet.length; i++) {  
        let input = alphabet[i].charCodeAt(); //goes through ASCII number codes assigned to every letter https://www.w3schools.com/charsets/ref_html_ascii.asp

        //checks if it's a letter (uppercase || lowercase)
        if((input >= 65 && input <= 90) || (input >=97 && input <= 122)) {
            //shift by shift number
            input += shift;
            //wrap around the alphabet. gotta understand this still
            if((input > 90 && alphabet[i] <= 'Z') || input > 122) {
                    input -=26;
            }
        }

        //converts from ASCII back to letters
        output += String.fromCharCode(input);
    }
    //please god work
    return console.log(`${output}`);
}

riddleMeThis();  //rn it only works within the console with values input here. gotta utilize args to make it come out to the console


// this is if you do math

// function caesarCipher(str, shift) {
//     let result = ""; 
//     for (let i = 0; i < str.length; i++) {
//         let charCode = str.charCodeAt(i);
//         if (charCode >= 65 && charCode <=  90) {
//             result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
//         } else if (charCode >= 97 && charCode <= 122) {
//             result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }
