"use strict";
//methods of array class 10 mein hai.
//Syntaxes in Typescricpt
// variable
let abc = "uzair"; //type inference (string)
const numZzz = 12345;
var xyz = true;
// array
//index number          //0        //1    //2    //3
let myArr = ["Azhar", "Uzair", "etc", "etc"];
let myArr2 = [23, "Shahjee", 25]; //ye b array ki type define
//krny ka trika h.
console.log(myArr);
console.log(myArr[1]);
// yahan main ny pehly se type define krdi hai (string) is wja se wo sirf sring hi accept krega.
// otherwise agar hum strong typing yani pehly se type nh btayn to array mein
// esi koi restriction nh hoti.
//array ki type mein pipe (|) lga kr aur Type Allias de kr donu tarah se multiple
// types de skty hain.
//tuples
let myTupple = ["Azhar", 11, "Uzair", "Shah Family"];
// if else
//if aur else if mein if aur else ke keyword k baad round bracket () mein condition
// lgti h phir curly bracket mein console ya return krty hain.
// jabke else mein direct curly bracket lgta hai.
if (abc) {
    console.log(`My name is ${abc}`);
}
else if (xyz) {
    console.log("if else syntax");
}
else {
    console.log("bugs in code!!!!!!");
}
let temperature = 40;
//switch statement
switch (temperature) {
    case 40:
        console.log("It is too hot here!");
        break;
    case 30:
        console.log("normal weather");
        break;
    default:
        console.log("Winter Started ;)");
        break;
}
// union literal
let myDetails = "Ghulam Mustafa";
myDetails = 25;
//myDetails = true //error qk union literal mn sirf string aur number define kri hyn.
// object
let myObj = {
    name: "Akber Shah",
    age: 23,
    height: 6,
};
//2 ways of accessing object property
console.log(myObj.name);
console.log(myObj["age"]); //2 ways...
console.log(myObj);
// type alliased object
let personDet = {
    name: "Syed Ghulam Mustafa",
    age: 25,
};
// anonymous object 
let car = {
    make: 2024,
    brand: "Toyota",
    model: "Revo"
};
// nested object
