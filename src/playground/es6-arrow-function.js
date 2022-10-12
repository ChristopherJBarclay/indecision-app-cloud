/*
function square(x) {
    return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//    return x * x;
// };
// all arrow functions are anonymous. Cannot create a named function.


const squareArrow = (x) => x * x;
// arrow function expression syntax (returns single expression) 
// expression (after arrow) is implicitly returned. No need to explicitly use return


console.log(squareArrow(4)); */

// CHALLENGE - use arrow functions
const getFirstName = (fullName) => {
    if (fullName) {
        return fullName.split(' ')[0];
    }
};

console.log(getFirstName('Chris Barclay'));

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Baba Doosh'));