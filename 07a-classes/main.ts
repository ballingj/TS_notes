class Point {
    x: number
    y: number

    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`)
    }

    getDistance(another: Point) {
        // ..
    }
}

// creating an instance of a class Point
let point = new Point()
point.x =1
point.y = 2

point.draw()
