const toRainLangusge = number => {
    let result = "";

    if(number % 3 === 0) result += "Pling";
    if(number % 5 === 0) result += "Plang";
    if(number % 7 === 0) result += "Plong";

    return result || number;
}

console.log(toRainLangusge(3)); //Pling
console.log(toRainLangusge(21)); //PlingPlong
console.log(toRainLangusge(35)); //PlangPlong
console.log(toRainLangusge(1)); // 1