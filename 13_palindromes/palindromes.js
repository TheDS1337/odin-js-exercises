const isAlphabet = (c) => c.match(/[a-z]/i) !== null;
const isNumber = (c) => !isNaN(parseInt(c));

const palindromes = function (str) {
    let len = str.length;
    let mid = Math.ceil(len / 2);

    str = str.trim();
    str = str.toLowerCase();
    
    for( let i = 0, j = len - 1; i < mid; i++ ) {
        let a = str[i];

        if( !isAlphabet(a) && !isNumber(a) )
            continue;

        for( ; j > i; j-- ) {
            let b = str[j];

            if( !isAlphabet(b) && !isNumber(b) )
                continue;

            if( b === a ) {
                j--;
                break;
            } else                
                return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
