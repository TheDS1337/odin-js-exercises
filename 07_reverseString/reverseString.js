const reverseString = function(str) {
    // Strings are immutable, so we work with arrays
    let arr = Array.from(str);
    let reverseArr = arr.toReversed();
/*
    for( let i = arr.length - 1; i >= 0; i-- )
        reverseArr.push(arr[i]);
*/
    return reverseArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
