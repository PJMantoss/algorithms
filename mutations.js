/*
Return true if the string in the first element of 
the array contains all of the letters of the string 
in the second element of the array. 

For example, ["hello", "Hello"], should return true 
because all of the letters in the second string are present 
in the first, ignoring case.
*/
function mutation(arr) {
    let arr1 = arr[0].toLowerCase();
    let arr2 = arr[1].toLowerCase().split("");
  
    for (let i=0; i<arr2.length; i++){
      if (arr1.indexOf(arr2[i]) < 0){
        return false;
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]);
  