//5. Remove Duplicate. This Algorithm removes duplicate members from an array?

removeDuplicate = arr => {
    let exists = {}, 
        outArr = [], 
        elm, 
        len = arr.length;

        for (let i=0; i < len; i++){
            elm = arr[i];
            if (!exists[elm]){
                outArr.push(elm);
                exists[elm] = true;
            }
        }

        return outArr;
}