function convertToCoins(amount, denominations) {
  if (
    amount <= 0 ||
    !Array.isArray(denominations) ||
    denominations.length === 0
  ) {
    return "Invalid input.";
  }

  denominations.sort((a, b) => b - a);

  let result = {};
  denominations.forEach((denomination) => {
    if (amount >= denomination) {
      result[denomination] = Math.floor(amount / denomination);
      amount %= denomination;
    }
  });

  return result;
}

let amount = parseInt(prompt("Enter the amount to convert into coins:"));
let denominations = [25, 10, 5, 1];
let coins = convertToCoins(amount, denominations);
console.log("Coins:", coins);
