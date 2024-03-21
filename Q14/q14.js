const filename = prompt("Enter FileName: ");
const dotIndex = filename.lastIndexOf(".");
const extension = filename.substring(dotIndex + 1);

console.log("Extension of " + filename + " is: " + extension);
