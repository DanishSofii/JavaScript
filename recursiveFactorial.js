function recursiveFact(n){
    //base case
    if(n === 0) return 1;  

    //recursive call
    return n * recursiveFact(n-1);
}

console.log(recursiveFact(5));
