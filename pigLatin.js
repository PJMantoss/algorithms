/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.
*/ 

function translatePigLatin(str) {
    let consRegex = /^[^aeiou]+/,
        theConsonants = str.match(consRegex); // Get Longest match of everything not a vowel(consonants)
  
     return theConsonants !== null // If regex patter found saves match, else, returns null
             ? str.replace(consRegex, "").concat(theConsonants).concat("ay") // If regex pattern (starts with consonant) found, deletes match and add it to the end with "ay"
             : str.concat("way"); // If regex pattern (with vowel) not found, add "way"
  }
  
  translatePigLatin("consonant");
  