function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1

  // EDGE CASES for if arr is all 0s or 1s
  if (arr[leftIdx] === 0) {
    return arr.length;
  } else if (arr[rightIdx] === 1) {
    return 0;
  }

  while(leftIdx <= rightIdx){
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[midIdx] === 0 && arr[midIdx - 1] === 1){
      return arr.length - midIdx
    }

    if (arr[midIdx] === 1){
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx - 1;
    }
  }
}






// NOTES

  //  [1, 1, 1, 1, 0, 0]

  // leftIdx = 0
  // rightIdx = 5
  // midIdx = 2
  // [{1, 1, {1}, 1, 0, 0}]
    // arr[mid] === 1
    // leftIdx = 3
    
  // leftIdx = 3
  // rightIdx = 5
  // midIdx = 4
  // [1, 1, 1, {1, {0}, 0}]
    // arr[mid] === 0 && arr[mid - 1] === 1
    // return 2
// module.exports = countZeroes





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