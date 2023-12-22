// constructor

class Player {
    //class field - all instances will initiate with these values
    score = 0
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
}


const player1 = new Player("blue", "steele")
player1.taunt()

const player2 = new Player("yellow", "submarine")
player2.taunt()

// see data
console.log(player1);
player1.loseLife()
console.log(player1);