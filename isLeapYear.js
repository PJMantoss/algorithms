//Implement isLeapYear function
//Leap year occurs every 4 years except for century years, but not when the year is divisible by 400.

const isLeapYear = year => {
    const numYear = Number(year);

    return numYear % 100 === 0 ? numYear % 400 === 0 : numYear % 4 === 0;
}

console.log(isLeapYear("2020")); // true
console.log(isLeapYear("2018")); // false
console.log(isLeapYear("1700")); // false
console.log(isLeapYear("1600")); // true