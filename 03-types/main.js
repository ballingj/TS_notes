// 1. when initiating a variable, the type is set
// let count = 3
// count = 'a'   // get an error
// setting types
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
/* plain vanilla javascript */
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
/* Enum */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
