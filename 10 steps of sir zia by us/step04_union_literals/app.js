"use strict";
let myName;
myName = null;
console.log(myName);
myName = "zia";
console.log(myName);
// myName = undefined //error 
// myName = 12 //error qk upar hum ny myName ki type string | null btayi thi is liye wo sirf string aur null hi accept krega.
let myAge;
myAge = 16;
console.log(myAge);
//console.log(myAge.toLowerCase()); //yahan error ayga qk myAge ki value 16 h aur number py string ka method nh use hota
myAge = "Dont Know";
console.log(myAge);
console.log(myAge.toString());
console.log(myAge.toLowerCase());
//error let newAge = Math.random() > 0.6 "Khan" : 60
//error newAge.toLowerCase()
//if (newAge == "khan") {
// newAge.toUpperCase()
//}
//  if(typeof newAge == "string") {
//     newAge.toUpperCase
//  }
//  typeof newAge === "string"
//  ? newAge.toUpperCase()
//  : newAge.toFixed()
let age;
age = 90;
age = "died";
age = "unknown";
// age = "living" // yhan error h qk upar hum ny "living" typing define nh kri h.
//  let zia:zia // yahan error h qk zia value(string) h r yhan as a type likhi mn ny.
// zia = "zia"
// zia = "khan" //sir zia k about yhan error h but h nhi.
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase();
}
// console.log(yourName); // answer undefined agya qk type undefined thi ye line mn ny dali h.
// yourName.toUpperCase // error your name is possibly 'undefined'.
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase();
console.log(yourName); // // answer undefined agya qk type undefined thi ye line mn ny dali h.
let data;
