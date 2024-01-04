// 1. when initiating a variable, the type is set

// let count = 3
// count = 'a'   // get an error

// setting types

let a: number
let b: boolean
let c: string
let d: any
let e: number[] = [1,2,3]
let f: any[] = [1, true, 'a', false]

/* plain vanilla javascript */
const ColorRed = 0
const ColorGreen = 1
const ColorBlue = 2

/* Enum */
enum Color {Red =0, Green =1, Blue=2, Purple=3}
let backgroundColor = Color.Red
