function linearSearch(arr,n,key){
    // iterate the whole array
    for(let i = 0 ; i<n ; i++ ){
        // check if the current element is equal to the key element
        if(arr[i] === key){
            // if equal , return the index of element
            return i;
        }
    }
    //else return the negative index 
    return -1;
}

var arr = [1,4,7,8,9,6,5];
var len = arr.length;

// function call
console.log(linearSearch(arr,len,5));

