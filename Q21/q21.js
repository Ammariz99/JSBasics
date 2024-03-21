function checkString(string1) {
  if (string1.slice(0, 2) === "py") {
    return string1;
  }
  return "py" + string1;
}

let string1 = prompt("Enter String: ");
console.log(checkString(string1));
