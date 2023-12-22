// Basic Union Type:
let age: number | string = 21;
age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

// Union type with type aliases
let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

// Function parameter union type:
function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

// Type narrowing
function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// const nums: number[] = [1,2,3,4]

// do not use any type
// const stuff: any[] = [1,2,3,4, true, "asdas", {}]

// holds an array containing either numbers or strings
const numOrString: (number | string)[] = [1,2,3, "das"]

// holds an array of either all strings or all numbers | not advisable
// const arrayAllNumsOrAllStrings: number[] | string[] = ["asd", "asd", 1]

// Union Type With Arrays
const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 43 });

// Literal Types
let zero: 0 = 0;
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Sunday";
