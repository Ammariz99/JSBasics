/* 5. Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

*/

function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("Error: Array is empty");
  }
}

try {
  const array1 = [];
  checkArray(array1);
} catch (error) {
  console.error(error.message);
}
