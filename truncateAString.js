//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
    // If str length is less than or equal to number don't truncate. Return str
   if (str.length <= num){
     return str;
   } else {  // Truncate string & add "..." to the end
     return str.slice(0, num) + "...";
   }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  