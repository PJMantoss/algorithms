/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
    for (let i=0; i<str.length; i++){
      // Current character's code
      let code = str.charCodeAt(i);
    // If current character's code not equal to 1st character + iteration(i) means character has been escaped
      if (code !== str.charCodeAt(0) + i){
        // if current character has been escaped, find and return previous character
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }
  // test
  fearNotLetter("abce");
  