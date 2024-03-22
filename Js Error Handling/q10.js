/* 10. Write a JavaScript program that demonstrates the use of the 'try-catch-finally' statement to catch and handle an error, and then execute some cleanup code in the 'finally' block.

*/

try {
  const result = 10 / 0;
  console.log("Result:", result);
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("Cleanup code executed.");
}
