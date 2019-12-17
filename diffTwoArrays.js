/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found 
in one of the two given arrays, but not both. In other words, return 
the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {

    return arr1.concat(arr2).filter(elem => !arr1.includes(elem) ||!arr2.includes(elem));
    
      // Same, same; but different.
    }
    
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    