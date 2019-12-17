/*
Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array 
that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr) {

    let args = arr.slice.call(arguments); //Declare a variable arg to store argument converted into an array
  
  return arr.filter(item => arr.includes(item) !==     
     args.includes(item)); //Return filtered array using includes()
  
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  