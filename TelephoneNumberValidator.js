// Return true if the passed string looks like a valid US phone number.

/* Valid US telephone numbers format:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/

tel1 = "555-555-5555";
tel2 = "(555)555-5555";
tel3 = "(555) 555-5555";
tel4 = "555 555 5555";
tel5 = "5555555555";
tel6 = "1 555 555 5555";
function telephoneCheck(str) {
    // 2 regex to make sure that if a paranthesis is used the string must have the 2 of them ()
    const regex = /(^1*[\s-]*\d{3}[\s-]*\d{3}[\s-]*\d{4}$)|^1*[\s-]*\(\s*\d{3}\s*\)[\s-]*\d{3}[\s-]*\d{4}$/;
    return regex.test(str);
  }
  
console.log(telephoneCheck("1  555)  555-5555"));