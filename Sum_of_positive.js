//solution 1

// function positiveSum(arr) {
//   let negatives =[];
//   let sum = 0;
//   for(let i = 0; i <= arr.length -1; i++){
//     if(arr[i]<0){
//       negatives.push(arr[i]);
//     } else {
//       sum+=arr[i];
//     }
//   };
//   return sum;
// };

//solution 2 

// function positiveSum(arr) {
//   let sum=arr.reduce((acccumulator,currentValue)=>{
//   if(currentValue>0){
//     return acccumulator+currentValue;
//   }else {
//     return acccumulator;
//   }
//   },0);
//   return sum;
// };

//solution 3 reduce method - shorten method

function positiveSum(arr) {
  let sum = arr.reduce(((acccumulator, currentValue) => currentValue > 0 ?  acccumulator += currentValue : acccumulator), 0);
  return sum;
};