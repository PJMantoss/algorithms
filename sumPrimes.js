/*
A prime number is a whole number greater than 1 with 
exactly two divisors: 1 and itself. For example, 2 is a prime number 
because it is only divisible by 1 and 2.
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all 
prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    let divisor = 1,
        sum = 0;
  
    while (divisor <= num){
       if (isPrime(divisor)){
         sum += divisor;
       }
       divisor++;
    }
    return sum;
  }
  
  //Function to check if a number is prime
  function isPrime(n){
    for (let i = 2; i < n; i++){
      if (n % i === 0)return false;
      
    }
    return n !== 1 && n !== 0;
  }
  
  sumPrimes(10);
  