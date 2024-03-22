/* 6. Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

*/

function checkString(str) {
  if (str.length === 0) {
    throw new Error("Error: string is empty");
  }
}

try {
  const string1 = "";
  checkString(string1);
} catch (error) {
  console.error(error.message);
}
