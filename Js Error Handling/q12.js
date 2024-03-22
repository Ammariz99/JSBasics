/*12. Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable.

*/

try {
  console.log(undefinedVariable);
} catch (error) {
  if (error.name === "ReferenceError") {
    console.error("ReferenceError:", error.message);
  } else {
    console.error("Error:", error.message);
  }
}
