const repeatString = function(str, n) {
    if( n < 0 )
        return 'ERROR';

    // Dont even bother
    if( str === '' || n === 0 )
        return '';

    let newStr = '';

    for( let i = 1; i <= n; i++ )
        newStr += str;

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
