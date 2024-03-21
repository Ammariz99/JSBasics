let userString = prompt("Enter String: ");

let charArray = userString.split("");
let firstChar = charArray[0];
let lastChar = charArray[charArray.length - 1];

charArray[0] = lastChar;
charArray[charArray.length - 1] = firstChar;

let modifiedString = charArray.join("");
console.log(modifiedString);
