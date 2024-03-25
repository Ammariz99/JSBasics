/* binary search */

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  } else {
    return binarySearch(arr, target, left, mid - 1);
  }
}

const inputArray = prompt("Enter a list of numbers separated by commas:")
  .split(",")
  .map(Number);
const targetElement = parseInt(
  prompt("Enter the element you want to search for:")
);

const sortedArray = inputArray.sort((a, b) => a - b);

const resultIndex = binarySearch(sortedArray, targetElement);

if (resultIndex !== -1) {
  console.log("Element", targetElement, "found at index", resultIndex);
} else {
  console.log("Element", targetElement, "not found in the array");
}
