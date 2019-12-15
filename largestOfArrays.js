// Return an array consisting of the largest number from each provided sub-array.
function largestOfFour(arr) {
    return arr.map(function(group) {//Map all items within outer array to a new array & return it as the final result
      return group.reduce(function(prev, current) { //In each inner array, reduce the content to a single value. Call back function compares two values: previous & current.
       return current > prev ? current : prev //If current value greater than previous we set it as the new previous
      })
    });
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  