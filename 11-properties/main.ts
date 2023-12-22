
// it is convention to prefix private parameters with '_'
//

class Point {
    constructor(private _x?: number, private _y?: number) {
    }

        
    draw() {
        console.log(`X: ${this._x}, Y: ${this._y}`)
    }

    get x() {
        return this._x;
    }

    set x(value: number) {
        if (value < 0)
            throw new Error('value can not be less than 0.')
        
        this._x = value;
    }
}

// creating an instance of a class Point
let point = new Point(1,2)

// Using the setter to change the value of _x
point.x = 10

point.draw()
