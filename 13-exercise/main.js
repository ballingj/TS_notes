"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var component = new like_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: ".concat(component.likesCount, ", isSelected: ").concat(component.isSelected));
/*
tsc *.ts --target ES5 && node main.js
*/ 
