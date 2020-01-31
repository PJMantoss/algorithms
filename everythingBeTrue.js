/*
Check if the predicate (second argument) is truthy 
on all elements of a collection (first argument).

In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to 
return true if its value is truthy. Otherwise, return false.
*/

function truthCheck(collection, pre) {
    // Uses the native “every” method to test whether all elements in the array pass the test.
    return collection.every(element => {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    })
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  