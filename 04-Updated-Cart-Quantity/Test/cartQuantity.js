// Using Function and Conditional Statements to update Cart Quantity;
// Initialize a variable;
let cartQuantity = 0;

// Function with a parameterto update cart quantity;
// function updateCartQuantity(quantity) {
//     // Use of conditional statements to check if quantity exceeds max limit;
//     if (cartQuantity + quantity > 10) {
//         alert('Cart is full!');
    
//     // Check whether quantity is less than 0;
//     } else if (cartQuantity + quantity < 0) {
//         alert('Not enough items in the cart');

//     // If quantity is valid, update the cart quantity;
//     } else {
//         cartQuantity += quantity;
//         console.log(`Cart updated: ${cartQuantity}`);
//     }
// }

// Modify the 'updateCartQuantity' so that if the quantity is invalid, alert(); and then return; (this is called an early return). An early return make our code cleaner becaouse we can remove the 'else-if'/ 'else'.


function updateCartQuantity(quantity) {

    // Check if quantity exceeds max limit;
    if (cartQuantity + quantity > 10) {
        alert('Cart is full!');
        return;
    }

    // Check whether quantity is less than 0;
    if (cartQuantity + quantity < 0) {
        alert('Not enough items in the cart');
        return;
    }

    // If quantity is valid, update the cart quantity;
    cartQuantity += quantity;
    console.log(`Cart updated: ${cartQuantity}`);
 }

