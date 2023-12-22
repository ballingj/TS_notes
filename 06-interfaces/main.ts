// inline annotations can be verbose

let drawPoint1 = (point: { x: number, y: number}) => {
    // ..
}

drawPoint1({
    x: 1,
    y: 2
})

//Interfaces can be better alternative

interface Point {
    x: number,
    y: number
}

let drawPoint2 = (point: Point) => {
    // ..
}

drawPoint2({
    x: 1,
    y: 2
})

