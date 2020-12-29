//Implement your own array mapping function with reduce()
//NOTE: You are only allowed to use the array.reduce() method

const map = (array, callback) => {
    return array.reduce((accumulator, value) => {
        return [...accumulator, callback(value)];
    }, [])
}

console.log([1,2,3], (v) => v + 1); //[2,3,4]