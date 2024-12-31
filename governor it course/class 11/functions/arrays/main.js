"use strict";
let numbers2 = [1, 2, 3];
let numbers3 = ["a", "b", "c"];
let example = 12345;
example = true;
example = "Akber";
let numbers4 = ["A", "B", "C", 1]; // tupples concept // is mein jo types aur jo length 
// define kari h wohi accept krega sirf aur nh krega error de dega.
let myNumbers = ["Hunain", "Hyder", "Ali"];
console.log(myNumbers.map(myNumber => {
    if (myNumber == "Ali") {
        myNumber = "Abdullah"; //agar value change wala print chahye return krwana must hai.
    }
    return myNumber;
}) //map b loop ki tarah kaam krta h.
);
console.log(myNumbers);
// 0 Hunain if myNumber == Ali myNumber == Abdullah  myN umber iterator object h.
// 1 Haider if mNumber == Ali myNumber == Abdullah
// 2 Ali    if myNumber == Ali myNumber == Abdullah
let ourNumbers = [1, 2, 3, 4, 5];
let squareNumbers = ourNumbers.map(num => num ** 2); // yahan pr return is liye nh krwaya qk yahan curly bracket nh lagaye hain.
console.log(ourNumbers);
console.log(squareNumbers);
