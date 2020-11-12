// A palindrome is a word or sentence that's 
// spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
    // Clean non alphanumeric characters of the string and covert it to lower case
    const cleanedString = str.replace(/[\W_]/g, '').toLowerCase();
    // Check each letter of the string
    const checkArray = cleanedString.split('').reduce((accum, letter, pos, arr, len=arr.length-pos-1) => {
        if (letter === arr[len]) {
            return accum && true;
        } else {
            return accum && false;
        }
    }, true)
    // return true if the whole string is a palindrome
    return checkArray;
}

;
console.log(palindrome('A man, a plan, a canal. Panama'));