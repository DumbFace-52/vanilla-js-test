// Exercise--1;
// Create a variable and save the current hour of the day (use 24-hour format and save it as a number between 0 and 23).
        /*
            -If hour is between 6 and 12 display "Good Morning" in the console.
            -If hour is between 13 and 17 display "Good Afternoon" in the console.
            -Otherwise, display "Good night" in the console.
        */

// Solution:
let theHour = 7;
if (theHour >= 6 && theHour <= 12) {
    console.log("Good Morning!!"); 
    
} else if( theHour >= 13 && theHour <= 17) {
    console.log("Good Afternoon!!"); 
    
} else {
    console.log("Good Night!!");
};

// Exercise--2;
// Continuing from Exercise--01, try changing the value in theHour variable to make it display diffrent messages in the console.

// Exercise--3;
// Continuing from Exercise--01, create a variable and save your name inside (as a string). Update the if-statement to display your name in each message. For example : `Good morning ${yourName}`.

// Solution:
theHour = 19;
let yourName = "Lil Princess";

if (theHour >= 6 && theHour <= 12) {
    console.log(`Good Morning ${yourName}!!`); 
    
} else if( theHour >= 13 && theHour <= 17) {
    console.log(`Good Afternoon ${yourName}!!`); 
    
} else {
    console.log(`Good Night ${yourName}!!`);
};

// Exercise--4;
// Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older). 
    /*
        -Create a variable "age" and save a person's age inside.
        -Create an if-statement that checks if the person qualifies for a discount. If they do, display "You get a discount" in the console. Otherwise, display "You don't get a discount" in the console.
        Note: try using the || operator in your solution.
        -Try changing the 'age' variable to display diffrent messages in the console.
    */

// Solution:
let personAge = 19;

if (personAge <= 6 || personAge >= 65) { console.log('You get a discount'); } else { console.log('You don\'t get a discount'); }

// Use of Ternary Operator;
personAge = 5;
console.log(personAge <= 6 || personAge >= 65 ? 'You get a discount' : 'You don\'t get a discount');

// Exercise--5;
// Continuing from Exercise--04, let's say the discount is only available if it is not a holiday. Create a variable: const isHoliday = true;
    /*
        -Update the if-statement to check if the person qualifies for a discount and if it is not a holiday.
        -Note: && has a higher priority than || so you may need to use the brackets () to control which code gets done first.
        -Try changing the 'isHoliday' variable to display diffrent messages in the console.
    */

// Solution:
personAge = 5;
const isHoliday = true;

if ((personAge <= 6 || personAge >= 65) && !isHoliday) {
    console.log('You get a discount');     
} else {
    console.log('You don\'t get a discount');     
};

// Use of Ternary Operator;
personAge = 65;
console.log((personAge <= 6 || personAge >= 65) && !isHoliday ? 'You get a discount' : 'You don\'t get a discount');
