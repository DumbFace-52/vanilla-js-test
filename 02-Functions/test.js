// Exercises - Functions
// 1a. Create a function called 'greet' that displays the message 'Hello!' in the console. Call/ run this function a few times using: greet();

// 1b. Continuing from 1a, add a parameter called 'name' to the 'greet' function and display the message: 'Hello ${name}!' 
// Call the function a few times with different names: greet('Simon');

// 1c. Try calling greet() without a name(it will display 'Hello undefined!'). Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.

// Use an if-statement. Since undefined is a falsy value, you can use: if(!name) {...} to check if 'name' is undefined.

// Solutions to 1a, 1b, 1c:
/* 
function greet() {
    console.log('Hello!');
}
greet();
*/

/* 
function greet(name) {
    console.log(`Hello ${name}!`);
}
greet('Princess');
*/

/*
function greet(name = 'Hii there!') {
    console.log(`Hello ${name}!`);
}
greet();
*/

// function greet(name) {
//     if (!name) {
//         console.log('Hi there!');
//     } else {
//         console.log(`Hello ${name}!`);
//     }
// }

// using Ternary Operation
function greet(name) {
    !name ? console.log('Hii there!') : console.log(`Hello ${name}!`);
}
greet();
greet('Princess');

// 2a. Create a function 'convertToFahrenheit(celsius)' that takes a number in degrees Celsius and returns a number in degrees Fahrenheit.
    /*
        Formula: Fahrenheit = (celsius*9/5) + 32
        convertToFahrenheit(25) => 77
    */
// Solution
function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}
console.log(convertToFahrenheit(25));

// 2b. Create a function 'convertToCelsius(fahrenheit)' that takes a number in degrees Fahrenheit and returns a number in degrees Celsius.
    /*
        Formula: Celsius = (fahrenheit - 32) * 5/9
        convertToCelsius(86) => 30
    */

// Solution
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
}
console.log(convertToCelsius(86));

// 2c. Create a function 'convertToTemperature(degrees, unit)' that takes a number and a unit ('C' or 'F'), and converts it into the other unit.
    /*
        convertToTemperature(25, 'C') => 77
        convertToTemperature(86, 'F') => 30
    */
// Note: return a string, and try to reuse the functions from 2a and 2c.

// Solution
function convertToTemperature(degrees, unit) {
    if (unit === 'C') {
        const result = convertToFahrenheit(degrees);
        return `${result}F`
    } else {
        const result = convertToCelsius(degrees);
        return `${result}C`
    }
}
console.log(convertToTemperature(25, 'C'));
console.log(convertToTemperature(86, 'F'));

// 3a. Create a function convertLength(length, from, to) that takes a number and a unit ('km' or 'miles') and converts the length to another unit ('km' or 'miles'). Note: 1 mile = 1.6km (approximately).
    /*
        convertLength(50, 'miles', 'km') => '80 km'
        convertLength(32, 'km', 'miles') => '20 miles'
        convertLength(50, 'km', 'km') => '50 km'
    */

// Solution
function convertLength(length, from, to) { 
    if (from === to) {
        return `${length} ${to}`;
    } else if (from === 'miles' && to === 'km') {
        return `${length * 1.6} km`;
    } else if (from === 'km' && to === 'miles') {
        return `${length / 1.6} miles`;
    }
}

console.log(convertLength(50,'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

// 3b. Update convertLength to support converting between km, miles and also feet. Note: 1 mile = 5280 ft, 1km = 3281 ft (approximately).
    /*
        convertLength(5, 'miles', 'km') => '8 km'
        convertLength(5, 'miles', 'ft') => '26400 ft'
        convertLength(5, 'km', 'ft') => '16405 ft'
    */

// Solution
function convertLength(length, from, to) {
    if (from === to) {
        return `${length} ${to}`;

    } else if (from === 'miles' && to === 'km') {
        return `${length * 1.6} ${to}`;

    } else if (from === 'km' && to === 'miles') {
        return `${length / 1.6} ${to}`;

    } else if (from === 'miles' && to === 'ft') {
        return `${length * 5280} ${to}`;

    } else if (from === 'ft' && to === 'miles') {
        return `${length / 5280} ${to}`;

    } else if (from === 'km' && to === 'ft') {
        return `${length * 3281} ${to}`;

    } else if (from === 'ft' && to === 'km') {
        return `${length / 3281} ${to}`;
    }
}
 
console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));

// 3c. Update convertLength so that if you give an invalid unit, it will return `Invalid unit: ${unit}`.
    /*
        convertLength(5, 'lbs', 'lbs') => 'Invalid unit: invalid'
    */

// Solution
function convertLength(length, from, to) {
    if (from !== 'km' && from !== 'miles' && from !== 'ft') {
        return `Invalid unit: ${from}`;

    } else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
        return `Invalid unit: ${to}`;

    } else if (from === 'miles' && to === 'km') {
        return `${length * 1.6} ${to}`;

    } else if (from === 'km' && to === 'miles') {
        return `${length / 1.6} ${to}`;

    } else if (from === 'miles' && to === 'ft') {
        return `${length * 5280} ${to}`;

    } else if (from === 'ft' && to === 'miles') {
        return `${length / 5280} ${to}`;

    } else if (from === 'km' && to === 'ft') {
        return `${length * 3281} ${to}`;

    } else if (from === 'ft' && to === 'km') {
        return `${length / 3281} ${to}`;

    } else {
        return `${length} ${to}`;
    }
}

console.log(convertLength(5, 'lbs', 'lbs'));
console.log(convertLength(5, 'km', 'km'));
 






