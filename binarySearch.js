// function binarySearch(a, k){
//   'use strict';
//   let minIndex = 0;
//   let maxIndex = a.length -1;
//   let currentElement;
//   let midIndex;
//
//   while(minIndex <= maxIndex){
//     midIndex = Math.round((minIndex+maxIndex)/2);
//     currentElement = a[midIndex];
//     if(currentElement > k){
//       maxIndex--;
//     }else if(currentElement < k){
//       minIndex++;
//     } else {
//       return midIndex
//     }
//   }
//   return -1;
// }


testCase = [
  [ [1,3,4,6,7,8], 7],
  [ [0,1,10,100,101], 0]
];

testCase.forEach((v)=>{
  console.log(binarySearch(...v))
})