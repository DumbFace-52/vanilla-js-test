// Exercises-Objects:

/*
1a. Let's say in the Amazon project, we have a basketball product. This product has a name of 'basketball', a price of 2095 cents, and a color of 'blue'. Create an object to represent this product and display it in the console.
*/
// Solution;
const basketballProduct = {
  name: 'Basketball',
  price: 2095,
  color: 'blue',
};

console.log(basketballProduct);

/*
1b. Continuing from 1a, let's say we want to increase the prize by 500 cents. Use dot nottation to increase the price, and display the updated object in the console.
*/
// Solution;
basketballProduct.price += 500;
console.log(basketballProduct);

/*
1c. Using bracket notation, add a property 'delivery-time' to the object with the value '3 days'. Display the updated object in the console.
*/
// Solution;
basketballProduct['delivery-time'] = '3 days';
console.log(basketballProduct);

/*
1d. Continuing from 1c, let's say we want to remove the 'delivery-time' property from the object. Use the delete keyword to remove it, and display the updated object in the console.
*/
// Solution;
delete basketballProduct['delivery-time'];
console.log(basketballProduct);

/*
1d. Create a function 'comparePrice(product1, product2)', which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function.
*/
// Solution;
function comparePrice(product1, product2) {
    // ternary operation
    // return (product1.price < product2.price) ? product1 : product2;

    if (product1.price < product2.price) {
        return product1;
    } else {
        return product2;
    }
}

const product1 = {
    name: 'Basketball',
    price: 2095
};

const product2 = {
    name: 'Shoes',
    price: 1295
};

console.log(comparePrice(product1, product2));

/*
1e. Create a function 'isSameProduct(productA, productB)', which returns true if 2 products have the same values inside ('name' and 'price'). If not, return false. Create 2 products and try out the fuction. (Hint: objects are references so you can't compare them directly)
*/
// Solution;
function isSameProduct(product1, product2) {
  if (productA.name === productB.name && productA.price === productB.price) {
    return true;
  } else {
    return false;
  }
}

// Here is an alternative solution that uses less code.
function isSameProduct(productA, productB) {
  return productA.name === productB.name && productA.price === productB.price;
}

const productA = {
  name: 'dress',
  price: 1000,
};

const productB = {
  name: 'polo-shirt',
  price: 900,
};

const productC = productA;

console.log(isSameProduct(productA, productB));
console.log(isSameProduct(productA, productC));

/*
1f. Using Google or an A.I. tool, search how to convert a string to all lowercase with JavaScript. ('Good Morning' => 'good morning')
*/
// Solution;
console.log('Good Morning'.toLowerCase());

/*
1g. Search how to repeat a string many times ('test' 2 times => 'testtest')
*/
// Solution;
console.log('test'.repeat(2));

/*

1h. We'll add localStorage to the calculator project. First, make a copy of the project.
    * Whenever we update the calculation, save it using .setItem()
    * When the page first loads, get the calculation using .getItem()
    * Use a default value of "if a calculation doesn't exist in local storage"
*/

