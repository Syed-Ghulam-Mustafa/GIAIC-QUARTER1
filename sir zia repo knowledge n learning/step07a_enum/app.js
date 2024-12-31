"use strict";
// step07a_enum
//choose one value property from multiple function
//mtlb 1 property ka multiple option
//paid option in website
// paid content hota h to wo us me hum enum ka use karty hain
//ye knowledge n lerning yt bolta h mujy samjh                
// nh aya ye iski baten.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0
var c = Color.Green;
console.log(Color.Green);
console.log(Color[1]);
console.log(Color["Green"]);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[3];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
console.log(Color2["Blue"]);
console.log(Color2.Blue);
console.log(Color2[4]);
// enum ke syntax mein jab console.log mein uska propera address dalogy like
// Color1.Green
// Color2["BLue"]
// to wo print mein us color ka index number la k dega.
// aur jab index number dogy to wo uska color btayga. Green,Blue etc.
