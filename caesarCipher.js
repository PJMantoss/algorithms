let caesarCipher = str => {
    //Deciphered Ref letters. Key: 13, Text: ABCD
    let decoded = {
        a: 'n', b: 'o', c: 'p', d: 'q',
        e: 'r', f: 's', g: 't', h: 'u',
        i: 'v', j: 'w', k: 'x', l: 'y',
        m: 'z', n: 'a', o: 'b', p: 'c',
        q: 'd', r: 'e', s: 'f', t: 'g',
        u: 'h', v: 'i', w: 'j', x: 'k',
        y: 'l', z: 'm'
    }

    //Convert to Lower case
    str = str.toLowerCase();

    //Decipher Code
    let decipher = '';
    let len = str.length;

    for (let i=0; i<len; i++){
        decipher += decoded[str[i]];
    }

    return decipher;
}