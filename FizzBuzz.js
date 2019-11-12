/* Q:print all the numbers from 1 to N
1)If the number is divisible by 3 then print ‘Fizz’.
2) If the number is divisible by 5 then print ‘Buzz’.
3) If the number is divisible by both 3 and 5 then print ‘FizzBuzz’.
*/

let FizzBuzz = n => {
    for (let i=1; i<=n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        } else if (i % 3 === 0){
            console.log('Fizz')
        } else if (i % 5 === 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}