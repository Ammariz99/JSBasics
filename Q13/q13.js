const userVar = {};

const nameVar = prompt("Enter named variable: ");
const varValue = prompt("Enter variable value: ");

userVar[nameVar] = varValue;

console.log("User defined Variable is: ", varValue);
