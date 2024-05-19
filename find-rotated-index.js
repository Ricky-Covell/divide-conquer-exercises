function findRotatedIndex(arr, val) {

  let rotationIdx = findRotationStartIdx(arr)
  if (rotationIdx > 0 && val >= arr[0] && val <= arr[rotationIdx - 1]) {
    return findIndex(arr, val, 0, rotationIdx - 1);
  } else {
    return findIndex(arr, val, rotationIdx, arr.length - 1);
  }


function findIndex(arr, val, leftIdx, rightIdx) {
  if (arr.length === 0) return -1;
  if (val < arr[leftIdx] || val > arr[rightIdx]) return -1;

  while (leftIdx <= rightIdx) {
    var midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[midIdx] === val) {
      return midIdx;
    } else if (val < arr[midIdx]) {
        rightIdx = midIdx - 1;
    } else {
        leftIdx = midIdx + 1;
    }
  }
  return -1;
}    

}

function findRotationStartIdx(arr){
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let leftIdx = 0
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (arr[midIdx] > arr[midIdx + 1]) {
        return midIdx + 1
      }  else if (arr[leftIdx] <= arr[midIdx]) {
        leftIdx = midIdx + 1
      } else {
        rightIdx = midIdx - 1
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