/*
*/

function addTogether(a, b) {
    let sum;
    //Return undefined if first argument is not a number or second argument is defined, but not a number.
      if (typeof a !== "number" && typeof b !== "number"){
        return undefined;
      }
  
      sum = b => {
        if (typeof b === "number"){
          return a + b;
        } else {
          return undefined;
        }
      }
    
      //Return sum of the arguments if both are provided otherwise return a sum function.
     if (typeof b === "undefined"){
      return b => sum(b)
    }else {
      return sum(b);
    };
  }
  
  addTogether(2,3);
  