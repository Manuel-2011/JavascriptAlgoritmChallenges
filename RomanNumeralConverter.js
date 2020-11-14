// Convert the given number into a roman numeral.

function convertToRoman(num) {
    const romanSymbols = {
        1 : 'I',
        5 : 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    let romanNumeral = '';
    // Decompose the number into roman numeral values
    const romanValues = Object.keys(romanSymbols);
    for (let i=romanValues.length-1; i>=0; i--) {
        // check if the roman symbol value fits in the number
        if (num/romanValues[i] >= 1) {
            let times = Math.floor(num/romanValues[i]);
            // Check it the roman value we are currently in is a 10base numer
            let base10 = false;
            if (i == 0 || romanValues[i]/2 == romanValues[i-1]) {
                base10 = true;
            }
            // Check if the remainder of the number is just 1 10base number less than the next 10base number
            if (base10 && romanValues[i]*times == romanValues[i+1] - romanValues[i]) {
                romanNumeral = romanNumeral+romanSymbols[romanValues[i]]+romanSymbols[romanValues[i+1]];
                num -= romanValues[i]*times;
            } else if (base10 === false && romanValues[i]*(num/romanValues[i]) >= romanValues[i+1] - romanValues[i-1]) {
                romanNumeral = romanNumeral+romanSymbols[romanValues[i-1]]+romanSymbols[romanValues[i+1]];
                num = num - (romanValues[i+1] - romanValues[i-1]);
            // If not just append the symbol the require number of times
            } else {
                for (let j=1; j <= times; j++) {
                    romanNumeral += romanSymbols[romanValues[i]];
                }
                num -= romanValues[i]*times;
            }
        }
    }
    
    
    return romanNumeral;
}


console.log(convertToRoman(97));