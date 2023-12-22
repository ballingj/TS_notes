
class Point {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    // to make parameters optional, add a '?'
    // constructor(x?: number, y?: number) {
    // then can call new Point()
        
    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`)
    }

    getDistance(another: Point) {
        // ..
    }
}

// creating an instance of a class Point
let point = new Point(1, 2)

point.draw()
