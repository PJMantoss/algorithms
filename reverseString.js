// How to reverse words in a sentence
reverseWord = str => {
    return str.split('').reverse().join('');
}

//How to reverse words in place
reverseInPlace = str => {
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}