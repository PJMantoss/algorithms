/* Sieve of Eratosthenes is a simple algorithm for finding all of the prime numbers between two numbers
(or up to a certain limit)
*/

/*RULES:
  Function takes one parameter
  Returns an array of all prime numbers from 0-parameter
*/
//Solution
sieveOfEratosthenes = n => {
  const isPrime = new Array(n + 1).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  for (let num = 2; num < n; num++){
      if (isPrime[num] === true){
          primes.push(num);

          let nextNum = num * num;

          while (nextNum <= n){
              isPrime[nextNum] = false;
              nextNum += num;
          }
      }
  }
  return primes;
}