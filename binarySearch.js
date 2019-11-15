// A Binary Search (Half-Interval Search) is a search algorithm that finds a particular element in a sorted array.
// Solution

binarySearch = (numArr, key) => {
    let middleIndex = Math.floor(numArr.length / 2);
    let middleElement = numArr[middleIndex];

    if (middleElement === key) return true;
    else if (middleElement < key && numArr.length > 1){
        return binarySearch(numArr.splice(middleIndex, numArr.length), key);
    } else if (middleElement > key && numArr.length > 1){
        return binarySearch(numArr.splice(0, middleIndex), key);
    } else {
        return false;
    }
}