// 1. How to verify a prime number
isPrime = n => {
    const divisor = 2;

    while (n > divisor){
        if (n % divisor == 0){
            return false;
        } else {
            divisor++
        }
        
    }
    return true;
}

// 2. How to Find all the prime factors of a number
primeFactors = n => {
    let factors = [],
        divisor = 2;

        while (n>2){
            if (n % divisor == 0){
                factors.push(divisor);
                n = n/divisor;
            } else{
                divisor++;
            }
        }
        return factors;
}

//3. How to find nth Fibonacci
fibonacciNo = n => {
    let fibo = [0,1];

    if (n<=2) return 1;

    for (let i=2; i<=n; i++){
        fibo[i] = fibo[i-1] + [i-2];
    }

    return fibo[n];
}
//4. How to find the greatest common divisor of 2 Nos
greatestCD = (a,b) => {
    if (b == 0){
        return a;
    } else {
        return greatestCD(b, a%b);
    }
}

//5. How to remove duplicate members of an array
removeDup = arr => {
    const exists = {},
          outArr = [],
          elm;

          for (let i=0; i<arr.length; i++){
              elm = arr[i];
              if (!exists[elm]){
                  outArr.push(elm);
                  exists[elm] = true
              }

              return outArr;
          }
}

//6. How to merge 2 sorted arrays
mergedSortedA = (a,b) => {
    const merged = [],
          aElm = a[0],
          bElm = b[0],
          i = [1],
          j = [2];

          if (a.length == 0){
              return b ;
          }
          if (b.length == 0){
              return a;
          }

          while ((aElm && !bElm) || aElm < bElm){
              merged.push(aElm);
              aElm = b[i++];
          }else(
              merged.push(bElm);
              bElm = a[j++];
          )

          return merged;

}

//7. How to swap 2 numbers without using a temporary variable
swapNo = (a,b) => {
    console.log('Before swap: ', 'a:', a, 'b:', b)
    b = b - a;
    a = a + b;
    b = a - b;
    console.log('After swap: ', 'a:', a, 'b:', b)
}

//8. How to reverse a string in JS
reverseStr = str => {
    if (str === ''){
        return '';
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
//9. How would u reverse words in a sentence
reverseWord = str => {
    return str.split('').reverse();
}

//10. How would u reverse words in place
reverseInP = str => {
    return str.split('').reverse().join('').split('').reverse().join('');
}
//11. How to find the 1st non-repeating xter in a string
firstNonRptXter = str => {
    let len =str.length,
        char,
        charCount = {};

        for (let i=0; i<len; i++){
            char = str[i];
            if (charCount[char]){
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }

        for (j in charCount){
            if (charCount[j] == 1){
                return j;
            }
        }
}

//12. How to remove duplicate xters in a string
removeDuplicateX = str => {
    let len = str.length,
        char,
        charCount = {},
        newStr = [];

        for (let i=0; i<len; i++){
            char = str[i];
            if (charCount[char]){
                charCount[char]++;
            } else{
                charCount[char] = 1;
            }
        }

        for (j in charCount){
            if(charCount[j] == 1)
        {
            newStr.push(j);
        }
        return newStr.join('');
}

//13. How to check a palindrome
checkPalindrome = str => {
    return str == str.split('').reverse().join('');
}

//14.How to generate random Nos btw 1-7 with a function that gen 1-5
rand5 = () => {
    return 1 + Math.random() * 4;
}

rand7 = () => {
    return 5 + rand5()/5 * 2;
}
//15. How to find a missing number from an unsorted array of Nos
missingNo = arr => {
    let n = arr.length+1,
        len = arr.length,
        expectedSum = n * (n+1)/2,
        sum = 0;

        for(let i=0; i<len; i++){
            sum += arr[i];
        }

        return expectedSum - sum;
}

//16. How to check if 2 Nos add up to a given No in an unsorted array
sumFinder = (arr, sum) => {
    let len = arr.length;

    for (let i=0; i<len-1; i++){
        for (let j=i+1; j<len; j++){
            if (arr[i] + arr[j] == sum){
                return true
            }
        }
        return false;
    }
}

//17. How to find the largest sum of any 2 elements
topSum = arr => {
    let biggest = arr[0],
        second = arr[1],
        len = arr.length,
        i = 2;

        if (len < 2) return null;

        if (biggest < second){
            biggest = arr[1];
            second = arr[0];
        }

        for (let i=0; i<len; i++){
            if (arr[i] > biggest){
                second = biggest;
                biggest = arr[i]; 
            } else if (arr[i] > second){
                second = arr[i];
            }

            return biggest + second;
        }
}

//18. How to count total No of zeros from 1 - n
countZero = n => {
    let count = 0;

    while (n>0){
        count += Math.floor(n/10);
        n = n/10;
    }
    return count;
}
//19. How can u match substr of a string
matchSubStr = (str, substr) => {
    let  idx = 0,
         i = 0,
         j = 0,
         len = str.length,
         subLen = substr.length;

         for (let i=0; i<len; i++){
             if (str[i] == substr[j]){
                 j++
             } else {
                 j = 0;
             }
                 if (j==0){
                     idx = i;
                 } else if (j==subLen) {
                     return idx;
                 }
             
             return -1;
         }
}

//20. How to create permutations of a string
permutations = str => {
    let arr = str.slice(''),
        len = arr.length,
        perms = [],
        rest,
        picked,
        restPerms,
        next;

        if (l == 0){
            return [str];
        }

        for (let i=0; i<len; i++){
            rest = Object.create(arr);
            picked = rest.splice(i,1);

            restPerms = permutations(rest.join(''));
        }

        for (let j=0; j=restPerms.length; j<len; j++){
            next  = picked.concat(restPerms[j]);
            perms.push(next.join(''));
        }
}