"use strict";
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let c = Color.green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["green"] = 2] = "green";
    Color1[Color1["blue"] = 3] = "blue";
})(Color1 || (Color1 = {}));
let ColorName = Color1[2];
console.log(ColorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
let colorIndex = Color2["Blue"];
console.log(colorIndex);
