// Super()

class Player {
    static description = "This is a class to instantiate players"
    //class field - all instances will initiate with these values
    #score = 0
    numLives = 10
    // no need to add the above to constructor
    constructor(first, last) {
        this.first = first
        this.last = last
    }

    taunt() {
        console.log("Hoorah!!!");
    }

    loseLife() {
        this.numLives -= 1
    }

    getScore() {
        return this.#score
    }

    setScore(newScore) {
        this.#score = newScore
    }

    // getter function
    get fullName() {
        return `${this.first} ${this.last}`
    }

    get score() {
        return this.#score
    }

    // setter function
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive!")
        }
        this.#score = newScore
    }

    // use static method
    static randomPlayer() {
        return new Player("Andy", "Samberg")
    }
}

// create a new Class inheriting the properties and methods of Player
class AdminPlayer extends Player {
    constructor(first, last, priviledges) {
        super(first, last)
        this.priviledges = priviledges
    }
    isAdmin = true
}

const admin = new AdminPlayer("Ima", "Admin", ["delete", "restore", "create"])

console.log(admin);

// const player1 = new Player("blue", "steele")
// player1.taunt()

// const player2 = new Player("yellow", "submarine")
// player2.taunt()

// // see data
// console.log(player1);
// player1.loseLife()
// console.log(player1);

// // use getters and setters
// // getters
// console.log(player1.fullName)
// console.log(player1.score);
// //similar to the getScore function
// console.log(player1.getScore());

// // setters
// player1.score = 100
// console.log(player1.score);
// // similar to the setScore function
// player1.setScore(101)
// console.log(player1.score);

// console.log(Player.randomPlayer())
// console.log("Player: ", Player.description);