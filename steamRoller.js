//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
    // I'm a steamroller, baby
    let flattenedArr = [].concat(...arr); 
    //Use spread operator to concatenate each element of arr with an empty array
    //Use Array.some() method to find out if the new array contains an array still
    // use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
    return flattenedArr.some(Array.isArray) ? steamrollArray(flattenedArr) : flattenedArr;
  
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  