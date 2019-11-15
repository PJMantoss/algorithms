// Memoized Fibonacci

/*RULES:
  Two params
    Index
      Index of number in fibonacci sequenec
    Cache
      An array used as memory
*/

memoFib = (index, cache) => {
    cache = cache || [];

    if (cache[index]) return cache[index];
    else {
        if (index < 3) return 1;
        else {
            cache[index] = memoFib(index - 1, cache) + memoFib(index - 2, cache);
        }
    }
    return cache[index];
}