const convertToCelsius = function(temp) {
  let convertedTemp = "0";

  convertedTemp = (temp - 32) * 5 / 9;
  return convertedTemp;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
