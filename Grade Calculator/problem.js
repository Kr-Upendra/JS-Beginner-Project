// const subarray = (n, arr) => {
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       for (let k = i; k <= j; k++) console.log(arr[k] + " ");
//       console.log("\n");
//     }
//   }
// };

console.log("USING RECURSION");

const printSubArray = (arr, start, end) => {
  if (end === arr.length) return;
  else if (start > end) printSubArray(arr, 0, end + 1);
  else {
    for (let i = start; i < end; i++) console.log(arr[i]);
    console.log(arr[end]);
    console.log("\n");
    printSubArray(arr, start + 1, end);
  }
};

const n = 5;
const arr = [1, 2, 3, 4, 5];
printSubArray(arr, 0, 0);
