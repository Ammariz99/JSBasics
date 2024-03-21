let userString = prompt("Enter String: ");
let index = userString.indexOf("script");

if (index === 4) {
  let modifiedString = userString.slice(0, 4) + userString.slice(10);
  console.log("Result: ", modifiedString);
} else {
  console.log("Orignal String: ", userString);
}
