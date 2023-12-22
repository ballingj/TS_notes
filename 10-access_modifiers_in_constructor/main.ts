
// in typescript, we can cleanup the code
// by eliminating the declarations

class Point {
    constructor(private x?: number, private y?: number) {
    }

        
    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`)
    }

}

// creating an instance of a class Point
let point = new Point(1,2)

point.draw()
