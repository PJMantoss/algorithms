// This Algorithm finds all the Prime Factors of a number;

primeFactors = n => {
    const factors = [],
           divisor = 2;

           while (n > divisor){
               if (n % divisor === 0){
                   factors.push(divisor);
                   n = n / divisor;
               } else {
                   divisor++;
               }
           }
           return factors;
}