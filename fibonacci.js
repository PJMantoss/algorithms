// How to find nth Fibonacci
//Solution I
fibonacci = n => {
    let fibo = [0,1];

    if (n<=2) return 1;

    for (let i=2; i<=n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }

    return fibo[n];
}

//Solution II
fibonacci = n => {
    if (n<3){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}