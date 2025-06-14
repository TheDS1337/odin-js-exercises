const findTheOldest = function(arr) {
    return arr.reduce((acc, curr) => {
        let currAge = curr.yearOfDeath === undefined ? (new Date()).getFullYear() - curr.yearOfBirth 
            : curr.yearOfDeath - curr.yearOfBirth;

        if( currAge > acc.age )
            return {person: curr, age: currAge};

        return acc;
    }, {person: {}, age: 0}).person;
};

// Do not edit below this line
module.exports = findTheOldest;
