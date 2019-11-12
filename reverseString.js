// How to reverse a string in JS
reverseStr = str => {
    if (str === ""){
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

// How to reverse words in a sentence
reverseWord = str => {
    return str.split('').reverse();
}

//How to reverse words in place
reverseInPlace = str => {
    return str.split('').reverse().join('').split('').reverse().join('');
}