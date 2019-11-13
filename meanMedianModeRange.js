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
const findMean2 = (...arr) => arr.reduce((total, value) => total + value, 0) / arr.length;

// Median
findMedian = arr => {
    let midValue = 0;
    let len = arr.length;
    arr.sort((a, b) =>  a - b);


    if(len % 2 === 0){ // even
        midValue = (arr[(len / 2) -1] + arr[len / 2]) / 2; // average of 2 middle NOs
    }else{
        midValue = arr[(len - 1) / 2];
    }

    return midValue;
}

// Mode
findMode = arr => {
    let modes = [], 
        count = [], 
        num,
        maxIndex = 0;

        for (let i=0; i<arr.length; i++){
            num = arr[i];
            count[num] = (count[num] || 0) + 1;
            if (count[num] > maxIndex){
                maxIndex = count[num];
            }
        }

        for (let i in count)
            if (count.hasOwnProperty(i)){
                if (count[i] === maxIndex){
                    modes.push(Number(i));
                }
            }

            return modes;
        
}

// Range
findRange = num => {
    num.sort((a, b) => a - b)
    return [num[0], num[num.length - 1]]
}

meanMedianModeRange = (arr) => {
    return {
        Mean: findMean(arr),
        Median: findMedian(arr),
        Mode: findMode(arr),
        Range: findRange(num)
    }
}