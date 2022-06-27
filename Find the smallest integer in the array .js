<!-- Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. -->

//solution 1 - loop

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let smallestInt = args[0]

//     for(let i = 0; i < args.length; i++)
//       (args[i] < smallestInt) ? smallestInt = args[i] : smallestInt;
    
    
//     return smallestInt
//   }
// }

//solution 2 - forEach

// class SmallestIntegerFinder {
//   findSmallestInt(args) {

//     let smallestInt = args[0]

//     args.forEach(i => (i < smallestInt) ? smallestInt = i : smallestInt)

//     return smallestInt
//   }
// }

// solution 3 - Math.min method

// class SmallestIntegerFinder {
//   findSmallestInt(args) {

//     return Math.min(...args)
    
//   }
// }

//solution 4 -sort method

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//   args.sort((a, b) => a - b);
//     return args[0]
//   }
// }
//solution 5 - reduce method

class SmallestIntegerFinder {
  findSmallestInt(args) {
  return args.reduce((accumulator, curentValue) => accumulator < curentValue ? accumulator : curentValue)
  }
}








