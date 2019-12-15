/*
Write a function that splits an array (first argument)
 into groups the length of size (second argument) and 
 returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArr = []; // Create empty array to store our chunks
    for (let i=0; i<arr.length; i += size){ // Use loops to generate numbers to be use as indices to slice the array in the right locations
     newArr.push(arr.slice(i, i + size));// Inside loop create each chunk and add it to newArr using .push()
    }
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  