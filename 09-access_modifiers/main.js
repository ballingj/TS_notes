var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: ".concat(this.x, ", Y: ").concat(this.y));
    };
    return Point;
}());
// creating an instance of a class Point
var point = new Point(1, 2);
point.draw();
