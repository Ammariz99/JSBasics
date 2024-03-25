/*find fibonacci series */

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const userInput = prompt("Enter No: ");
console.log("Fibonacci Series of", userInput, "is: ");
for (let i = 0; i <= userInput; i++) {
  console.log(fibonacci(i));
}
