function factorial(n){
    if(n == 0){
        return 1;
    }
    let fact = 1;
    for(let i=2;i<=n;i++){
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));
