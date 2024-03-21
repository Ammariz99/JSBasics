function removeChar(string, index) {
  return string.slice(0, index) + string.slice(index + 1);
}

const string = prompt("Prompt Enter String to Remove: ");
const stringPosition = parseInt(prompt("Enter Which index to delete:"));

console.log("Output: ", removeChar(string, stringPosition));
