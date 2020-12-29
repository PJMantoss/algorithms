//A function that checks if a sentence contains all the letters of the alphabets

const alphabets = 'abcdefghijklmnopqrstuvwxyz';

const isPangram = string => {
    //remove all capital letters
     //remove spaces between words and join the words without comma
     //filter to remove duplicates and sort
    const processedString = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('');

    return alphabets === processedString;
}

console.log(isPangram('the quick brown fox jumps over the lazy dog')); //true
console.log(isPangram('abcdefghijklmnopqrstuvwxyz')); //true
console.log(isPangram('abcdefhijklmopqrstuvwz')); //false
