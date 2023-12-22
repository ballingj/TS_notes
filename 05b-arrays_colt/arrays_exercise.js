// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var arrayNumbers = [1, 2, 3, 4, 5];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    // let sum : number = 0
    // products.map(product => sum += product.price)
    // return sum
    return products.reduce(function (prev, curr) { return prev + curr.price; }, 0);
}
//const total : number = 
var total = getTotal([
    { name: "coffee mug", price: 11.50 },
    { name: "coffee cup", price: 7.50 },
    { name: "hero mug", price: 11.50 },
    { name: "cat mug", price: 11.50 }
]);
console.log(total); // <- $42
