// logical operators. 1. && 2. || 3. < 4. > 5. <= 6. >=
// and operator, or operator, not operator

import { ftruncate } from "fs";

let a = (5<0) || (2<0)
console.log(a); // false

let b = "jan";
let c = "jan";
let e = "jan";

 let d = ((b == c) && (b == e)) || (5>0);
 console.log(d); // true

let aa = 5;
let bb = 10;
let cc = (!(aa===6 && bb===10)); 
console.log(cc); //true.

let dd = (!(aa===6 || bb===10)); 
console.log(dd); // false

// greater than operator

let height1 = 5.5 
let height2 = 5
console.log('height1>height2', height1>height2); //true

// less than operator

console.log('height1<height2', height1<height2); //false

// greater than or equal to operator

let bhatija1age = 3
let bhatija2age = 4
let bhatija3age = 1.5


// less than or equal to operator.


// && operator
// deal 1: meal + drink
const meal1 = true
const drink1 = true
const isDeal = meal1 && drink1;
console.log(isDeal); // true

const meal2 = true
const drink2 = false
const thatDeal = meal2 && drink2;
console.log(thatDeal); // false

const meal3 = true;
const drink3 = true;
const fries3 = false;
const fries4 = true;
const thatonedeal = meal3 && drink3 && fries3;
console.log(thatonedeal); // false

const thatthatdeal = meal3 && drink3 && fries4;
console.log(thatthatdeal); // true

// AND using form

const email = "myemail@gmail.com";
const password = ""

let user = "ahmed";
let pass = 123

console.log(user == "ahmed"); // true
console.log(user == "ahmed" && pass == 123); // true
console.log(user == "ahmed" && pass == 1234); // false
console.log(user == "ahmed" || pass == 1234); // true












