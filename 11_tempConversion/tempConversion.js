const convertToCelsius = function (fahrenheit) {
  return Number.parseFloat(((fahrenheit - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  return Number.parseFloat((celsius * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
