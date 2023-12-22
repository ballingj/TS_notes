// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
highScore = true;
highScore = 1000000000;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff;
stuff = ['a', 'b', 'c'];
stuff = [1, 2, 3];
// Create an array called colors that can hold a mixture of RGB and HSL color types
// let colors: rgbColor | hslColor   < my solution - why wrong?
var colors = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in 
//   the array with the same format
var greet = function (name) {
    if (typeof name === 'string') {
        console.log("Hello, ".concat(name));
    }
    else if (Array.isArray(name)) {
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var el = name_1[_i];
            console.log("Hello, ".concat(el));
        }
        ;
    }
};
greet("Jeff");
greet(["Jeff", "Jason", "Jennifer"]);
// no such thing as typeof string[]
// const arrayString: string[] = ['a', 'b', 'c']
// console.log(typeof(arrayString));  // returns object
// solution
// const greet = (person: string | string[]): void => {
//     if (typeof person === 'string') {
//         console.log(`Hello, ${person}`);
//     } else
//         for (let el of person) {
//             console.log(`Hello, ${el}`);
//         };
// }
// console.log(greet("Jeff"))
// console.log(greet(["Jeff", "Jason", "Jennifer"]))
// console.log(greet(["Jeff", "Jason", "Jennifer"]))
