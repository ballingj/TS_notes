// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"


function twoFer(name: string = "you") : string {
    return `one for ${name} and one for me`
}

console.log(twoFer("Jeff"))
console.log(twoFer())


// **********************************************
// ******************* PART 2 *******************
// **********************************************
// https://en.wikipedia.org/wiki/Leap_year#Algorithm
//
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

// function isLeapYear(year : number) : boolean {
//     if (year % 4 === 0 && year % 100 !== 0) {
//         return true
//     } else if (year % 400 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

function isLeapYear(year : number) : boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

console.log(isLeapYear(2012)) // => true
console.log(isLeapYear(2013)) // => false

console.log(isLeapYear(2000)) // => true

