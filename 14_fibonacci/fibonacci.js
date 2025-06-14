const fibonacci = function(n) {
    // Baseless asumptions:
    //  n is for sure an integer
    //  more than that, it is a natural number

    if( typeof n === "string" )
        n = parseInt(n);

    if( n < 0 )
        return "OOPS";
    else if( n < 2 )
        return n;

    let a = 0;
    let b = 1;

    for( let i = 2; i <= n; i++ )
        [a, b] = [b, a + b];

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
