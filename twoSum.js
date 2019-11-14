/* Given an array of numbers and a target number, find the sum of two numbers from the array that is equal to the target number.
RULES:
  Function takes two arguments
    An array of numbers
    A 'sum' number that we want
  The function should return an array of pairs from inside the number array, that add up to the sum provided
*/ 

// Solution: Using nested loops

    twoSum = (numArr, sum) => {
        let sumArr = [];

        numArr.forEach(number => {
            for (let i=0; i<numArr.length; i++){
                if (number === numArr[i]){
                    i++;
                }
                if ((number + numArr[i]) === sum){
                    sumArr.push([number, numArr[i]])
                }
            }
        })
        return sumArr;
    }