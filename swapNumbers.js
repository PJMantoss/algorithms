// This Algorithm swaps two numbers without using a temporary variable

swapNumbers = (a, b) => {
    console.log('Before swap: ', 'a: ', a, 'b: ', b)
    b = b - a;
    a = a + b;
    b = a - b;
    console.log('After swap: ', 'a: ', a, 'b: ', b)
}