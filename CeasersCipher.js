// Decode a String where the values are shifted by 13 places

function rot13(str) {
    const strArray = str.split("");
    // Iterate through each letter
    const decoded = strArray.map(char => {
        // Filter out non-alphabetic characters
        const regex = /[\W_]/i;
        if (regex.test(char)) {
            return char;
        } 
        // Decode the character
        else {
            const shift = 13;
            let newCode = char.charCodeAt(0) - shift;
            if (newCode < "A".charCodeAt(0)) {
                newCode = "Z".charCodeAt(0) - ("A".charCodeAt(0) - newCode) + 1;
            }
            return String.fromCharCode(newCode);
        }
        
    })
    .join("");
    
    return  decoded;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));