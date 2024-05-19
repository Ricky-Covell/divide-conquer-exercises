function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  if (arr[rightIdx] > arr[leftIdx] || leftIdx === rightIdx) {
      return 0;
    }
    
  while (leftIdx <= rightIdx){
     let midIdx = Math.floor((leftIdx + rightIdx) / 2);

     if (arr[midIdx + 1] < arr[midIdx]){
         return midIdx + 1;
     } else if (arr[midIdx] < arr[midIdx - 1]){
         return midIdx;
     }

     if (arr[rightIdx] > arr[midIdx]) {
        rightIdx = midIdx - 1;
     } else {
        leftIdx = midIdx + 1;
     }
  }
}




// NOTES
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