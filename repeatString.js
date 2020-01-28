/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
    // This solution uses recursion
    if (num < 1){ // We check if a number is negative and return empty str if true
      return "";
    } else if(num === 1) { // If number equals to 1 we return the string itself
      return str;
    } else { // If not we add the string to a call of our function reducing num by 1
      return str + repeatStringNumTimes(str, num - 1);
    }
    
  }
  
  repeatStringNumTimes("abc", 3);
  