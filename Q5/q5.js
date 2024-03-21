let string = prompt("Enter String: ");
for (let i = 0; i < string.length; i++) {
  let char = string.charAt(string.length - 1);
  string = char + string.slice(0, -1);

  console.log(string);
}
