"use strict";
console.log("Hello World");
function greet() {
    console.log("Hello World!");
    console.log("How are you");
    console.log("which class r u in!");
    console.log("which is ur school");
}
greet();
greet();
greet();
greet(); // agar () hata dengy to hello world nh ayga qk wo isko variable smjhega
function add(num1, num2) {
    const sum = num1 + num2;
    console.log("Sum: ", sum);
}
// functiom ko call krte waqt arguments provide krna 
add(5, 3); // yhan 5 aur 3 argumwnts hain.
// class assignment by miss hina.
function subtraction(numberA, numberB) {
    console.log(`subtraction is ${numberA - numberB} `);
}
subtraction(9, 4);
function greet2(name = "bhai") {
    console.log("Assalam o Alaikum hunain");
    console.log("Assalam o Alaikum " + name);
    return name;
}
let UserName = greet2("Ali");
greet2("Syed Ghulam Mustafa");
greet2();
console.log(UserName + "is my best friend");
console.log(UserName + "what do you eat?");
greet2();
