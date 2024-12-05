// Objects in Calculator Mini Project;
/*
We'll add localStorage to the calculator project. First, make a copy of the project.
    * Whenever we update the calculation, save it using .setItem()
    * When the page first loads, get the calculation using .getItem()
    * Use a default value of "if a calculation doesn't exist in local storage"
*/

// Solution;
let calculation = localStorage.getItem('calculation') || '';

function updateCalculator(value) {
    calculation += value;
    localStorage.setItem('calculation', calculation);
    console.log(calculation);
}

// Optional: you can also create a function in order to reuse the code.
function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}
