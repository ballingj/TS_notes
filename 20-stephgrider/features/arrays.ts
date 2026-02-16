const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// Array of string arrays
let carsByMake: string[][] = [];
// looks like this
carsByMake = [
  ['f150', 'ranger'],
  ['corolla', 'camry'],
  ['camaro', 'silverado']
];

// Why do we care to use Typed arrays?
// 1) Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();  // remove 'chevy'

// 2) Prevent incompatible values
carMakers.push(100);

// 3) Help with 'map', 'forEach', 'reduce'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// 4) Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
