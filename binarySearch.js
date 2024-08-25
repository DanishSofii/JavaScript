function binarySearch(arr,low,high,target){
    while(low <= high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            low = mid +1;
        }
        else{
            high = mid -1;
        }
    }
    return -1;
}

const arr = [1,2,3,4,5,6,7,8,9];
const target = 6;
console.log(binarySearch(arr,0,arr.length - 1, target));

