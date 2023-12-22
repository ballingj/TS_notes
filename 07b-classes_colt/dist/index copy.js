"use strict";
// Classes and Interfaces
// by implementing the Interface into classes, the properties or methods are now expected
// example color in Colorful and print() in Printable
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Adidas", "Blue");
// previous lesson codes
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMEtod() {
        console.log("Secret Method!!!!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score can not be negative");
        }
        this._score = newScore;
    }
}
const elton = new Player("Elton", "John", 50);
console.log(elton.fullName);
console.log(elton.score);
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999999;
    }
}
