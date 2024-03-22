/* 2. Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

*/

try {
  const object = undefined;
  const value = object.property;
  if (value != undefined) {
    console.log(value);
  } else {
    console.error("property of undefined objects is not accessed");
  }
} catch (error) {
  console.log("Error: ", error.message);
}
