function findFloor(arr, val, low = 0, high = arr.length - 1) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1; 

    if (val < arr[leftIdx]) {
        return -1;
    }
    
    if (val >= arr[rightIdx]) {
        return arr[rightIdx];
    }
    
    while(leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2)
    
        if (arr[midIdx] === val) {
            return arr[midIdx];
        }
    
        if (midIdx > 0 && arr[midIdx - 1] <= val && val < arr[midIdx]) {
            return arr[midIdx - 1];
        }
    
        if (val < arr[midIdx]) {
            rightIdx = midIdx - 1;
        } else {
            leftIdx = midIdx + 1;
        }
  }
}




// NOTES



// BINARY SEARCH JS:

// function binarySearch(arr, val){
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;
//     while(leftIdx <= rightIdx){
//         let middleIdx = Math.floor((leftIdx + rightIdx)/2);
//         let middleVal = arr[middleIdx];
//         if (middleVal < val){
//             leftIdx = middleIdx + 1
//         } else if (middleVal > val){
//             rightIdx = middleIdx - 1
//         } else {
//             return;
//         }
//     }
// }