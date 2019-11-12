// 1. Check Prime: Q. How will you verify a prime number?

isPrime = n => {
    const divisor = 2;

    while (n > divisor){
        if (n % divisor == 0){
            return false;
        } else {
            divisor++;
        }
    }
    return true;
}

// 2. Prime Factors. Q.How could you find all prime factors of a number?
primeFactors = n => {
    const factors = [],
          divisor = 2;

    while (n>2){
        if (n % divisor == 0){
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}

// 3. Fibonacci. Q.How to get nth Fibonacci number?
fibonacci = n => {
    const fibo = [0,1];

    if (n<=2) return 1;

    for (let i=2; i<=n; i++){
        fibo[i] = fibo[i-1]+ fibo[i-2];
    }

    return fibo[n];
}

//4. Greatest Common Divisor. Q. How would you find the greatest common divisor of two numbers?
greatestCD = (a,b) => {
    if (b == 0){
        return a;
    } else {
        return greatestCD(b, a%b);
    }
}

//5. Remove Duplicate. Q. How would you remove duplicate members from an array?
removeDup = arr => {
    const exists = {},
        outArr = [],
        elm;

        for (let i=0; i<arr.length; i++){
            elm = arr[i];
            if (!exists[elm]){
                outArr.push(elm);
                exists[elm] = true;
            }
        }
        return outArr;
}

// 6. Merge 2 sorted array. Q. How would you merge two sorted arrays?
mergeSortedArray = (a,b) => {
    const merged = [],
          aElm = a[0],
          bElm = b[0],
          i = 1,
          j = 2;

          if (a.length == 0){
              return b;
          }
          if (b.length == 0){
              return a;
          }

          while (aElm || bElm){
            if ((aElm && !bElm) || aElm < bElm){
                merged.push(aElm)
                aElm = a[i++];
            } else {
            merged.push(bElm)
            bElm = b[j++];
        }
          }
          return merged;
}

// 7. Swap numbers without temp. Q. How would you swap two numbers without using a temporary variable?
swapNum = (a,b) => {
    console.log('before swap: ', 'a: ', a, 'b: ', b);
    b = b -a;
    a = a+ b;
    b = a - b;
    console.log('After swap: ', 'a: ', a, 'b: ', b)
}

// 8. String Reverse. Q. How would you reverse a string in JavaScript?
//Solution 1
reverse = str => {
    rStr = '';
    for (let i = str.length-1; i>=0; i--){
        rStr += str[i];
    }

    return rStr;
}
//Solution 2
reverse = str => {
    if (str === ''){
        return '';
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

//9. Reverse II Q.How would you reverse words in a sentence?
reverseWords = str => {
    return str.split(' ').reverse();
}

//10. Reverse in Place Q.  If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.
reverseInPlace = str => {
    return str.split('').reverse().join('').split('').reverse().join('');
}
//11. 1st non-repeating Char Q. How will you find the first non-repeating char in a string?
firstNonRptChar = str => {
    let len = str.length,
         char,
        charCount = {};

        for (let i=0; i<len; i++){
            char = str[i];
            if (charCount[char]){
                charCount[char]++;
            }else {
                charCount[char] = 1;
            }
            }

            for (let j in charCount){
                if (charCount[j]==1){
                    return j;
                }
        }
}
//12. Remove Duplicate Xter. Q. How will you remove duplicate characters from a string?
removeDuplicateChar = str => {
    let len = str.length,
        char,
        charCount = {},
        newStr = [];

        for (let i=0; i<len; i++){
            char = str[i];
            if (charCount[char]){
                charCount[char]++;
            }else{
                charCount[char] = 1;
            }
            }

            for (let j in charCount){
                if (charCount[j] == 1){
                    newStr.push(j);
                }
                return newStr.join('');
        }
}

//13. Palindrome. Q. How will you verify a word as a palindrome?
checkPalindrome = str => {
    return str == str.split('').reverse().join('');
}

//14. Random Numbers. Q. If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?
rand5 = () => {
    return 1 + Math.random() * 4;
}

rand7 = () => {
    return 5 + rand5()/5 * 2;
}

//15. Missing number. Q. from an unsorted array of numbers 1 to 100 excluding one number, how will you find that number?
missingNumber = arr => {
    let n = arr.length+1,
        len = arr.length,
        sum = 0,
        expectedSum = n* (n+1) / 2;

        for (let i=0; i<len; i++){
            sum += arr[i];
        }

        return expectedSum - sum;
}

//16. Sum of 2. Q From an unsorted array, check whether there are any two numbers that will sum up to a given number?
sumFinder = (arr, sum) => {
    let len = arr.length;

    for (let i=0; i<len-1; i++){
        for (let j=i+1; j<len; j++){
            if (arr[i] + arr[j] == sum){
                return true;
            }
        }
        return false;
    }
}

//17. Largest sum. Q. How would you find the largest sum of any two elements?
topSum = arr => {
    let biggest = arr[0],
        second = arr[1],
        len = arr.length,
        i = 2;

        if (len<2) return null;

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
        }
        return biggest + second;
}

//18. Counting zeros. Q. Count Total number of zeros from 1 upto n?
countZero = n => {
    let count = 0;

    while (n>0){
        count += Math.floor(n/10);
        n = n/10
    }
    return count;
}

//19. Substring Match. Q. How can you match substring of a string?
subStrFinder = (str, subStr) => {
    let idx = 0,
        i = 0,
        j = 0,
        len = str.length,
        subLen = subStr.length;

        for (let i=0; i<len; i++){
            if (str[i] == subStr[j]){
                j++;
            } else {
                j = 0;
            }

            if (j==0){
                idx = i;
            } else if (j == subLen){
                return idx;
            }

            return -1;
        }

}

//20. Permutations. Q. How would you create all permutation of a string?
permutations = str => {
    let arr = str.split(''),
        len = arr.length,
        perms = [],
        rest,
        picked,
        restPerms,
        next;

        if (len == 0){
            return [str];
        }

        for (let i=0; i<len; i++){
            rest = Object.create(arr);
            picked = rest.splice(i,1);

            restPerms = permutations(rest.join(''));
        }

        for (let j=0; jLen = restPerms.length; j < jLen; j++){
            next = picked.concat([j]);
            perms.push(next.join(''));
        }
        return perms;
    }
    