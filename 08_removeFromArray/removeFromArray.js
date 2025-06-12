const removeFromArray = function(arr, ...args) {
    for( const arg of args )
        arr = arr.filter((val) => val !== arg);

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
