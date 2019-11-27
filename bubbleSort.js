//Bubble Sort

/*The idea behind bubble sort is that every pair of adjacent values is compared, 
and then the two values swap positions if the first value is greater than the second. 
This way during each pass through the array, the largest value “bubbles up” to the top, 
and after each pass the elements furthest to the right are in the correct order. 

RULES
  Takes one parameter,
    An array,
  Sort it using bubble sort,
  Return sorted array
*/

//Solution
bubbleSort = arr => {
    let len = arr.length;
    for (i=0; i<len; i++){
        for (let j=0; j<len; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
            }
        }
    }
    return arr;
}