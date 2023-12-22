// getters and setters

class Player {
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
}


const player1 = new Player("blue", "steele")
player1.taunt()

const player2 = new Player("yellow", "submarine")
player2.taunt()

// see data
console.log(player1);
player1.loseLife()
console.log(player1);

// use getters and setters
// getters
console.log(player1.fullName)
console.log(player1.score);
//similar to the getScore function
console.log(player1.getScore());

// setters
player1.score = 100
console.log(player1.score);
// similar to the setScore function
player1.setScore(101)
console.log(player1.score);

