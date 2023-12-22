// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const arrayNumbers : number[] = [1,2,3,4,5]

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard : string[][] = []


// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
    name : string;
    price : number;
}


// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices


function getTotal( products : Product[] ) {
    // let sum : number = 0
    // products.map(product => sum += product.price)
    // return sum
    
    return products.reduce((prev, curr) => prev + curr.price, 0);
}

//const total : number = 
const total = getTotal([
    {name: "coffee mug", price: 11.50},
    {name: "coffee cup", price: 7.50},
    {name: "hero mug", price: 11.50},
    {name: "cat mug", price: 11.50}
])

console.log(total)    // <- $42
