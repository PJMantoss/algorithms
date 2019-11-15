/*
Merge Sort uses the concept of divide and conquer to sort a list of elements. 
Meaning, it will divide the bigger problem into smaller problems and then solve each of 
the small problems in order to solve the bigger problem that we started out with.

RULES:
  Two function algorithm
  function mergeSort(arr){
    // take in a single, unsorted array as a parameter
    // split the array into two halves
  }
  function merge (array1, array2){
    // takes in two sorted arrays as parameters
    // merges those sorted arrays into one sorted array
    // returns one sorted array
  }
*/

// Solution
// function I
mergeSort = unsortedArr => {
    // If Array has only one element
    if (unsortedArr.length <= 1){
        return unsortedArr;
    }

    // Find middle of array
    const middle = Math.floor(unsortedArr.length / 2);

    //Divide array into 2 - left & right
    const left = unsortedArr.slice(0, middle);
    const right = unsortedArr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

// function II - merge the 2 arrays (left & right)
merge = (left, right) => {
    let resultArr = [],
        leftIndex = 0,
        rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length){
            if (left[leftIndex] < right[rightIndex]){
                resultArr.push(left[leftIndex]);
                leftIndex++;
            } else {
                resultArr.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return resultArr
               .concat(left.slice(leftIndex))
               .concat(right.slice(rightIndex));
}