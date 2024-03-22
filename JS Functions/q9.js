/* Write a JavaScript function that accepts an argument and returns the type.*/

function getType(value) {
  let type = typeof value;
  if (type === "object") {
    if (value === null) {
      return "null";
    } else if (Array.isArray(value)) {
      return "array";
    }
  }
  return type;
}
let input1 = null;
let input2 = [];
let input3 = 123;
let input4 = "Hello";
let input5 = true;

console.log("Type of input1:", getType(input1));
console.log("Type of input2:", getType(input2));
console.log("Type of input3:", getType(input3));
console.log("Type of input4:", getType(input4));
console.log("Type of input5:", getType(input5));
