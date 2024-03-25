/* find sum of the array */

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const num = prompt("Enter No: ").split(",").map(Number);
const result = findSum(num);
console.log("Sum of Array is: ", result);
