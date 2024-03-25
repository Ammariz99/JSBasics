/* Write a JavaScript program to search for a given integer in an array of sorted integers using the Binary Search Algorithm and recursion.  */

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  } else {
    return binarySearch(arr, target, left, mid - 1);
  }
}

const sortedArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
const target1 = 6;
const target2 = 16;

const index1 = binarySearch(sortedArray, target1);
const index2 = binarySearch(sortedArray, target2);

console.log("Index of", target1, "in the array:", index1);
console.log("Index of ", target2, "in the array:", index2);
