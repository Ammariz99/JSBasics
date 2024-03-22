/* 11. Write a JavaScript program that uses a try-catch block to catch and handle an 'EvalError' when evaluating an invalid expression.

*/

try {
  eval("invalid expression");
  console.log("Evaluated successfully.");
} catch (error) {
  if (error instanceof EvalError) {
    console.error("EvalError:", error.message);
  } else {
    console.error("Error:", error.message);
  }
}
