/*
Create a function that looks through an array (first argument) and 
returns the first element in the array that passes a truth test (second argument). 
If no element passes the test, return undefined. 
*/

function findElement(arr, func) {
    let num = 0, len = arr.length;
  
    for (let i=0; i<len; i++){ // iterate through array to find which number returns true
      if(func(arr[i]) === true){ // replace (num) with array items.
        num = arr[i];
  
        return num;
      }
    }
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  