// Sieve of Eratosthenes

/*RULES:
  Function takes one parameter
  Return an array of all prime numbers from 0-parameter
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