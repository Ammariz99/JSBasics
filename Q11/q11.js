function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

const celsius = 90;
const fahrenheit = 37;

console.log(celsius + "°C is " + celsiusToFahrenheit(celsius) + "°F");
console.log(fahrenheit + "°F is " + fahrenheitToCelsius(fahrenheit) + "°C");
