//Implement isIsogram function
//isogram is a string in which all letters occur only once

const isIsogram = string => {
    const lowerCased = string.toLowerCase();

    const result = lowerCased.split('').every((v,i) => console.log(v,i) || lowerCased.indexOf(v) === i);

    return result;
}

console.log(isIsogram('ambidExtrously')) // true
console.log(isIsogram('patteRN')) // false