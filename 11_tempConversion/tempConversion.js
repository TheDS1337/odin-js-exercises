const roundUpToDecimal = function(num, dec = 1) {
  let expOfBase = Math.pow(10, dec);
  return Math.round(num * expOfBase) / expOfBase;
}

const convertToCelsius = function(temp) {
  return roundUpToDecimal((temp - 32) * 5 / 9);
};

const convertToFahrenheit = function(temp) {
  return roundUpToDecimal(9 * temp / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
