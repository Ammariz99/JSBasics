function validateCreditCardNumber(cardNumber) {
  cardNumber = cardNumber.replace(/[\s-]/g, "");

  if (
    /^3[47]\d{13}$/.test(cardNumber) ||
    /^4(?:\d{12}|\d{15})$/.test(cardNumber) ||
    /^5[1-5]\d{14}$/.test(cardNumber) ||
    /^(6011\d{12}|5\d{14})$/.test(cardNumber) ||
    /^3(?:0[0-5]|[68]\d)\d{11}$/.test(cardNumber) ||
    /^(?:2131|1800)\d{11}$/.test(cardNumber) ||
    /^35\d{14}$/.test(cardNumber)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(validateCreditCardNumber("378282246310005"));
console.log(validateCreditCardNumber("4111111111111111"));
console.log(validateCreditCardNumber("5555555555554444"));
console.log(validateCreditCardNumber("6011111111111117"));
console.log(validateCreditCardNumber("30569309025904"));
console.log(validateCreditCardNumber("3530111333300000"));
console.log(validateCreditCardNumber("1234567890123456"));
