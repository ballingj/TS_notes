// Strings
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9;  // errors

movieTitle.toUpperCase()  // methods available to strings

// Numbers
let numCatLives: number = 9;
numCatLives+= 1;
// numCatLives = 'zero'  // errors


// Booleans
let gameOver: boolean = false;
gameOver = true;
// gameOver = "false"  // errors

// Type Inference
let age = 40;   // TS will infer this as number

let tvShow = "Friends"  // tvShow is now type of string

// the any type
// defeats the purpose of TS and should not be used 
// type any can appear when delaying initialization on variables, producing implicit any type

let thing;  // type is any 
thing = 'hello'
thing = 1;
thing = false
thing()
thing.toUpperCase()



