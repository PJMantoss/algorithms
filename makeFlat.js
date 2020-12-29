//Implement flatten nested array using recursive reduce - makeFlat()
//NOTE: You are only allowed to use the array.reduce() method

const makeFlat = array => {
    return array.reduce((accumulator, value) => {
        return Array.isArray(value) ? [...accumulator, ...makeFlat(value)] : [...accumulator, value]
    }, [])
}

console.log(makeFlat(["one", ["two", "three"], ["four", ["five"]]])); // ['one','two','three','four','five']