const toRainLangusge = number => {
    let result = "";

    if(number % 3 === 0) result += "Pling";
    if(number % 5 === 0) result += "Plang";
    if(number % 7 === 0) result += "Plong";

    return result || number;
}

console.log(toRainLangusge(3));
console.log(toRainLangusge(21));
console.log(toRainLangusge(35));
console.log(toRainLangusge(1));