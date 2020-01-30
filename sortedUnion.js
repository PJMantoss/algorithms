/*The program has to return a new array of 
unique values from two original arrays in the order they show up. 
So there is not sorting required, and there shouldn’t be any duplicates. 
*/
function uniteUnique(arr) {
    let args = [...arguments],
        result = [];
  
        for (let i=0; i<args.length; i++){
          for (let j=0; j<args[i].length; j++){
            if (!result.includes(args[i][j])){
              result.push(args[i][j]);
            }
          }
        }
        return result;
  }