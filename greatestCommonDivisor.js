// Greatest Common Divisor: This Algorithm finds the greatest common divisor of two numbers.

greatestCommonDiv = (a, b) => {
    if (b === 0){
        return a;
    } else {
        return greatestCommonDiv(b, a%b)
    }
}