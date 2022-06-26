//Reversed sequence

//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]

//solution 1 - loop
// const reverseSeq = n => {
//     ints = [];
//     for (let i = n; i > 0; i--) {
//       ints.push(i);
//     }
//     return ints;
//   };
//   reverseSeq(5);

  //solution 2 - map method with constructor
  const reverseSeq = n => {
    return Array(n)
    .fill(n)
    .map((n, index) => n - index)
  };

  //solution 3 - arr.from method
//   const reverseSeq = n => {
//     const arr = Array.from({length: n}, (_, index) => index + 1).reverse();
//     return arr;
//   };

  