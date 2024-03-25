/* binary to decimal */

function binaryToDecimal(binaryStr, index = 0) {
  if (index === binaryStr.length) {
    return 0;
  }

  const binaryDigit = parseInt(binaryStr[index], 10);
  const power = binaryStr.length - 1 - index;
  return (
    binaryDigit * Math.pow(2, power) + binaryToDecimal(binaryStr, index + 1)
  );
}

const binaryNumber = "101010";
const decimalNumber = binaryToDecimal(binaryNumber);

console.log("Decimal number of", binaryNumber, "is", decimalNumber);
