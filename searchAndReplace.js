/*
Perform a search and replace on the sentence using 
the arguments provided and return the new sentence.
*/
function myReplace(str, before, after) { 
    // Check to see if first letter of before is upper case
   if (before[0] === before[0].toUpperCase()){
     // If before's first letter is upper case replace after's first letter with its upper case
            after = after.replace(after[0], after[0].toUpperCase());
         }
 
    return str.replace(before, after);
 }
 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
 