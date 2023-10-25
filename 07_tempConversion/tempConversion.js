const convertToCelsius = function(temp) {
  let convertedTemp = "0";

  convertedTemp = (temp - 32) * 5 / 9;
  let roundedNum = Math.round(convertedTemp * 10) / 10;
  return roundedNum;
};

const convertToFahrenheit = function(cTemp) {
  let convertedTemp = "0";

  convertedTemp = (cTemp * 9 / 5 + 32);
  let roundedTemp = Math.round(convertedTemp * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
