function sortedFrequency(arr, val) {
    if (lastIndex(arr, val) === -1 || firstIndex(arr, val) === -1) {
        return -1;
    }

    return (lastIndex(arr, val) - firstIndex(arr, val)) + 1
}

function firstIndex(arr,val){
    leftIdx = 0;
    rightIdx = arr.length - 1;

    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if ((arr[midIdx - 1] !== val || midIdx === 0) && arr[midIdx] === val) {
            return midIdx
        }

        if (arr[midIdx] < val){
            leftIdx = midIdx + 1;
          } else {
            rightIdx = midIdx - 1;
          }
    }

    return -1
}

function lastIndex(arr,val){
    leftIdx = 0;
    rightIdx = arr.length - 1;

    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if ((arr[midIdx + 1] !== val || midIdx === arr.length - 1) && arr[midIdx] === val) {
            return midIdx
        }

        if (val < arr[midIdx]){
            rightIdx = midIdx - 1;
          } else {
            leftIdx = midIdx + 1;
          }
    }

    return -1
}










    // problem solving (FIXED)
// lastIndex([1, 1, 2, 2, 2, 2, 3], 2) === -1  why????????

// [{1, 1, 2, {2}, 2, 2, 3}], 2
// leftIdx = 0
// rightIdx = 6
// midIdx = 3
    // arr[midIdx] === 2
    //val === 2
    // 2 !< 2
    // leftIdx = 3


// [1, 1, 2, {2, {2}, 2, 3}], 2
// leftIdx = 3
// rightIdx = 6
// midIdx = 4
    // arr[midIdx] === 2
    //val === 2
    // 2!< 2
    // leftIdx = 5



// [1, 1, 2, 2, 2, {{2}, 3}], 2
// leftIdx = 5
// rightIdx = 6
// midIdx = 5 
    //val === 2
    // 3 !== val && 2 === val
    // return 5




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