"use strict";
// property field and readonly field
// class Player {
//     //readonly field only available in TS
//     readonly first: string
//     readonly last: string
//     // type is inferred in number field
//     private score: number = 0 // or use the javascript private modifier # 
//     // similar code in JS
//     // #score = 0
//     constructor(first: string, last:string) {
//         this.first = first
//         this.last = last
//     }
// }
// Parameter properties shorhand
// just pass the parameters into the constructor function
// with the public or private keyword
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
    }
}
const elton = new Player("Elton", "John");
console.log(elton);
