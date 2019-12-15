/* You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
    // Create a copy of the second array
    let copiedArr = arr2.slice();
    for (let i=0; i<arr1.length; i++){ // Iterate through all the items in arr1. For each item in arr1 splice into the copied arr
      copiedArr.splice(n,0, arr1[i]);
      n++; // Increment index after performing splice
    }
    return copiedArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  