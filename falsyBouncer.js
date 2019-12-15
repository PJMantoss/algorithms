// Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
    // 
    return arr.filter(Boolean); // The filter() method returns a boolean value which takes a single argument and returns true for truthy
  }
  
  bouncer([7, "ate", "", false, 9]);
  