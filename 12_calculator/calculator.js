const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let sum = 0;

  for( n of arr )
    sum += n;

  return sum;
};

const multiply = function(arr) {
  let prod = 1;

  for( n of arr )
    prod *= n;

  return prod;
};

const power = function(a, b) {
  let prod = 1;

  for( let i = 0; i < b; i++ )
    prod *= a;

  return prod;
};

const factorial = function(n) {
  if( n === 0 )
    return 1;

  return n * factorial(n - 1);	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
