const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// this format is an Array
const coke = ['brown', true, 40];
coke[0] = 40;  // no errors; we lose the 'brown' value

// we can turn it into a tuple with type annotation
const coke1: [string, boolean, number] = ['brown', true, 40];
coke1[0] = 40;  // errors

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];


// case against tuples:  tuples are not intuitive
const carSpecs: [number, number] = [400, 3354];  // what are these numbers representing?

// use objects instead
const carStats = {
  horsepower: 400,
  weight: 3354
};
