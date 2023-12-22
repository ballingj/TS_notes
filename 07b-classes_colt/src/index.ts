// Creating Abstract Classes

// Abstract Class

abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number
    greet() {
        console.log("Hello World");
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last)
    }
    getPay(): number {
        return this.salary
    }
}

class PartTimeEmployee extends Employee {
    constructor(
      first: string,
      last: string,
      private hourlyRate: number,
      private hoursWorked: number
    ) {
      super(first, last);
    }
    getPay(): number {
      return this.hourlyRate * this.hoursWorked;
    }
  }
  
  const betty = new FullTimeEmployee("Betty", "White", 95000);
  console.log(betty.getPay());
  
  const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
  
  console.log(bill.getPay());
  



/* 
Use interfaces to define a requirement of class
*/

// in order for a class to be colorful, it must have 'color' property
interface Colorful {
    color: string
}

// class with Printable implementation must have print function 
interface Printable {
    print() : void
}

// by implementing the Interface into classes, the properties or methods are now expected
// example color in Colorful and print() in Printable

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}

    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const bike1 = new Bike("red")

const jacket1 = new Jacket("Adidas", "Blue")



// previous lesson codes

class Player {
    
    constructor(
        public first: string,
        public last:string,
        protected _score: number
    ) {}
    
    private secretMEtod(): void{
        console.log("Secret Method!!!!")
    }
    
    get fullName() {
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score
    }

    set score(newScore: number) {
        if(newScore < 0) {
            throw new Error ("Score can not be negative")
        }
        this._score = newScore
    }
}

const elton = new Player("Elton", "John", 50)

console.log(elton.fullName)
console.log(elton.score);

class SuperPlayer extends Player {
    public isAdmin: boolean = true
    maxScore() {
        this._score = 9999999
    }
}

