
// function for fibbo
function fib(n){
    // first two numbers are always 0,1
    const fib = [0,1];
    for(let i = 2; i<n;i++){
        // current element is equal to the sum of first previous two numbers in array
        fib[i]=fib[i-1]+fib[i-2];
    }
    // return Array
    return fib;
}

console.log(fib(2))
console.log(fib(5))