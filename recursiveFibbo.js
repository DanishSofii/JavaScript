function recursiveFibbo(n){
    // base case
    if(n<=1) return n;

    //recursive call to the function
    return recursiveFibbo(n-1) + recursiveFibbo(n-2);
}
console.log(recursiveFibbo(2));

console.log(recursiveFibbo(6));
