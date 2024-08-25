function binarySearch(arr,low,high,target){
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            return binarySearch(arr,mid+1,high,target);
        }
        else{
            return binarySearch(arr,low,mid-1,target);
        }
    }
    return -1;
}


const arr = [1,2,3,4,5];
const target = 3;
console.log(binarySearch(arr,0,arr.length-1,target));
