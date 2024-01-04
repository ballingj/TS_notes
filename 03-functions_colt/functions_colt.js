"use strict";
// Function parameter type annotations:
const doSomething = (person, age, isFunny) => { };
// Return type annotation:
function greet(person = "stranger") {
    return `Hi there, ${person}!`;
}
function square(num) {
    return num * num;
}
square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);
// Arrow function:
const add = (x, y) => {
    return x + y;
};
// Contextual Type Clues
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
    return color.toUpperCase();
});
// Void
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// Never
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING!");
    }
}
const message = "Hello There!";
// normal JS function
let log = function (message) {
    console.log(message);
};
// arrow function
let doLog = (message) => console.log(message);
