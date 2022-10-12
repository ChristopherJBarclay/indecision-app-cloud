// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    // console.log(arguments); // 'arguments' does not work with arrow functions
    return a + b;
}
console.log(add(55,1));


// this keyword - no longer bound with arrow functions
const user = {
    name: 'Andrew', 
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        // 'this' will not work if printPlacesLived is an arrow function. 
        // change it to es6 function definition
            return this.cities.map((city) => this.name + ' has lived in ' + city);
        }
        
        /* this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        }); */ //instead of forEach, use map...
};
console.log(user.printPlacesLived());

// CHALLENGE
    // define: 
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return new array where numbers have been multiplied

const multiplier = {
    numbers: [1, 4, 13],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());