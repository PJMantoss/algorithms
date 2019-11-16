// How to Reverse Array in Place
reverseArrayInPlace = arr => {
    for (let i=0; i<arr.length/2; i++){
        tempValue = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempValue;
    }

    return arr;
}