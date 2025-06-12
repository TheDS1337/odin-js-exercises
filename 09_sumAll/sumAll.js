const sumAll = function(a, b) {
    if( a < 0 || b < 0 )
        return 'ERROR';

    if( a !== Math.floor(a) || b !== Math.floor(b) )
        return 'ERROR';

    if( a > b )
        [a, b] = [b, a];

    return (a + b) * (b - a + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
