//Implement encode and decode functions that follow run-length encoding pattern
//Run Length encoding is a form of data compression, where consecuative data elements
//are replaced by just one data value and count of that value

const encode = string => {
    return string.replace(/(\w)\1+/g, (m,v) => `${m.length}${v}`);
    //Regex matches any letter of the alphabeth and matches any further occurence indefinitely
}

const decode = string => {
    return string.replace(/(\d+)(\w)/g, (x,y,z) => z.repeat(y));
}

console.log(encode('wwwwwwwwiiuuuu')) //3w4i4u
console.log(decode('111u3a4o')) //uuaaaoooo