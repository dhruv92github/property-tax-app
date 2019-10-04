
// // 1. largestAndSmallest in an Array

//  let a = [-20, 34, 21, -87, 92, 2147483647, 1, 3, 43, 3];
// function largestAndSmallest(arr) {
//   let largest = arr[0];
//   let smallest = arr[0];

//   for (let index = 0; index < arr.length-1; index++) {
//     console.log(largest + " : " + smallest);
//     if (arr[index] > largest) {
//       largest = arr[index];
//     } else if (arr[index] < smallest) {
//       smallest = arr[index];
//     }
//   }
//   console.log("largest: " + largest + ", smallest: " + smallest);
// }
// largestAndSmallest(a);

// // 2. How to Find all Pairs in Array of Integers Whose sum is Equal to a Given Number ---

// let b = [2, 3, 4, 6, 12, 11, 9, 7, 16, 8, -1];

// function sums(arr, sum) {
//   let pairs = [];
//   let numList = [];
//   for (let index = 0; index < arr.length; index++) {
//     let currNum = arr[index];
//     let diff = sum - currNum;
//     if (numList.includes(diff)) {
//       pairs.push([currNum, diff]);
//     }
//     numList.push(currNum);
//   }
//   return pairs;
// }
// console.log(sums(b, 15));

// // 3. reverse an Array
// let c = [2, 3, 4, 6, 12, 11, 9, 7, 16, 8, -1];

// function reverse(arr) {
//   let revArray = [];
//   let len = arr.length;
//   for (let index = len - 1; index >= 0; index--) {
//     console.log(index + " : " + arr[index]);
//     revArray.push(arr[index]);
//   }
//   return revArray;
// }

// console.log(reverse(c));

//   // reverse Inplace
// function reverseInplace(arr) {
//   let i = 0;
//   let j = arr.length - 1;
//   let temp;
//   if (i === j) {
//     return arr;
//   }
//   while (i < j) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
//   return arr;
// }
// console.log(reverseInplace(c));

   // 4. reverse a String
let str="hello world";
// let revstr=str.split('').reverse().join('');
// console.log(revstr);

function revStr(str){
    let revstr='';
    for (let i = str.length-1; i >=0 ; i--) {
       revstr=revstr+str[i];
        
    }
    return revstr;

}
console.log(revStr(str));