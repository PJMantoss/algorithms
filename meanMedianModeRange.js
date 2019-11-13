// Given an array of numbers, calculate the mean, median, and mode.
// Mean: Solution I
findMean = arr => {
    let total = 0;

    for (let i=0; i<arr.length; i++){
        total += arr[i];
    }

    return total/arr.length;
}

// Mean: Solution II
const findMean2 = (...arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;