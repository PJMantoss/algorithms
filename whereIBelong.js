/*
Return the lowest index at which a value (second argument) should be inserted 
into an array (first argument) once it has been sorted. 
The returned value should be a number.
*/ 
function getIndexToIns(arr, num) {
    
    let len = arr.length;
  // First sort array using .sort(callBackFunction)
    arr.sort(function(a,b){
      return a - b
      });
  //Using loop, compare items in array
    for (let i=0; i<len; i++){
      if (arr[i] >= num){
        return i;
      } 
    }
    return len;
  }
  
  getIndexToIns([40, 60], 50);
  