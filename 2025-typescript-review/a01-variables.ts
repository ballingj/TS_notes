// string, number, boolean, null, undefined
// let myName: string = '';  // no need to set the type because TS can infer the type
let myName = '';
myName = 'test';

// Union types
let myUnionVar: string | null = null;

let myVar: number | boolean;

// Arrays
let items = ['test1', 'test2'];  // inferred type

let emptyItems: string[] = [];  // empty arrays of string

let unionItems = ['test3', 120];  // inferred types with strings or numbers
let emptyUnionItems: string[] | number[] = [];  // empty array with strings or numbers

// objects
const account: {
  name: string,
  balance: number,
  status?: string   // ? tells TS this is optional
} = {
  name: 'Jeff',
  balance: 10
};

 // Array of objects
let accounts: {}[];

