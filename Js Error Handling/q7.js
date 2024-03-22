/* 7. Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.

*/

const arr = [1, 2, 3, 4];

try {
  const index = 5;
  const element = arr[index];
  console.log("Element:", element);
} catch (error) {
  if (error instanceof RangeError) {
    console.error("Error: Invalid index.");
  } else {
    console.error("Error:", error.message);
  }
}
