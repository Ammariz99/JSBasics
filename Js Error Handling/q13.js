/* 13. Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.

*/

const invalidJSONString = '{ "name": "John", "age": }';

try {
  const parsedJSON = JSON.parse(invalidJSONString);
  console.log("Parsed JSON:", parsedJSON);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("SyntaxError:", error.message);
  } else {
    console.error("Error:", error.message);
  }
}
