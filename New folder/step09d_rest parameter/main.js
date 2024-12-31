"use strict";
// step 09d
// Rest Parameters
// Rest parameter in named function
function myFunc(a, ...b) {
    //return a + b.push()
    return a + b.unshift();
} // join method nh chlta number array mn add krny k liye. wo string ka h method
//myFunc(2,7,9,9,6,4)
let result = myFunc(5, 7, 4, 9, 7);
console.log(result);
function Greet(a, ...b) {
    return a + b.join(" ");
}
console.log(Greet("Hello", "lee market", "saddar town", "karachi", "Pakistan"));
