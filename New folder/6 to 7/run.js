"use strict";
let ounpage = "syed ghulam mustafa";
console.log(ounpage.length);
let name1 = 112233;
console.log(name1);
//enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
let c = color.blue;
console.log(color.blue);
var color1;
(function (color1) {
    color1[color1["orang"] = 1] = "orang";
    color1[color1["apple"] = 2] = "apple";
    color1[color1["pinapple"] = 3] = "pinapple";
})(color1 || (color1 = {}));
let colorindex = color1[3];
console.log(colorindex);
var animal;
(function (animal) {
    animal[animal["elephant"] = 3] = "elephant";
    animal[animal["loin"] = 4] = "loin";
    animal[animal["wildcat"] = 5] = "wildcat";
})(animal || (animal = {}));
let animal1 = animal[4];
console.log(animal1);
let fruit = 1 /* favfruit.pomegranede */;
console.log(fruit);
let colorindex1 = 1 /* color2["yellow"] */;
console.log(colorindex1);
