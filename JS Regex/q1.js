function isFirstCharUppercaseRegex(str) {
  return /^[A-Z]/.test(str);
}

console.log(isFirstCharUppercaseRegex("Hello"));
console.log(isFirstCharUppercaseRegex("world"));
