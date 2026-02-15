// Function parameter type annotations:
const doSomething = (person: string, age: number, isFunny: boolean) => {};

// Return type annotation:
function greet(person: string = "stranger"): string {
  return `Hi there, ${person}!`;
}

function square(num: number): number {
  return num * num;
}

square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);

// return of number or string
function myRandom(num: number) {
  if(Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}


// Arrow function:
const add = (x: number, y: number): number => {
  return x + y;
};

// Contextual Type Clues
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

/* Void - is a return type for functions that don't return anything. 
  It means just that - this function is void of any data.
*/
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

/* Never - The never type represents values that NEVER occur.
  We might use it to annotate a function
  that always throws an exception, or a
  function that never finishes executing.
*/
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}

const message = "Hello There!"
// normal JS function
let log = function(message: string) {
  console.log(message)
}

// arrow function
let doLog = (message: string) => console.log(message)

