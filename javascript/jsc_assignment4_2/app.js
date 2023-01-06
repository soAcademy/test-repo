const num = document.getElementById("number");

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return 1.8 * (fahrenheit - 32);
}

const turntocel = document.getElementById("celsius");
const turntofah = document.getElementById("fahrenheit");

turntocel.addEventListener("click", (event) => {
  const temperature = celsiusToFahrenheit(num.value);
  document.getElementById("result").innerHTML = temperature;
});

turntofah.addEventListener("click", (event) => {
  const temperature = fahrenheitToCelsius(num.value);
  document.getElementById("result").innerHTML = temperature;
});
