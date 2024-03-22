/* 9. Write a JavaScript program that uses a try-catch block to catch and handle a 'URIError' when decoding an invalid URI.

*/

try {
  const invalidURI = "%";
  decodeURIComponent(invalidURI);
  console.log("Decoded URI:", invalidURI);
} catch (error) {
  if (error instanceof URIError) {
    console.error("URIError:", error.message);
  } else {
    console.error("Error:", error.message);
  }
}
