"use strict";
//lazmi samjhna hai aur prac b krni hai 
function greet(username) {
    let a = 9;
    //console.log(a)
    return a;
    //return `Assalam o Alaikum ${username}`
}
let abc = greet("Ali");
// console.log(abc) // yahan pr agar direct console.log(a) krengy to error ayga chahe ap ny upar function waly curly brackets mein a ko return kr b diya hoga phir b.
// bahar a k yani is point py ap ko again nam dena prega a ka ya function ka by using variable. to phr ye print kr k de dega a ko.
// Lexical scope is athe scope of a variable or function based on 
//geeksforgeeks.org se lexical prhna h homework h
// List/ Array Concept (list b kehty hain aur array bhi typescript mein pther languages like python mein list kehty hain.)
let student1 = "hunain";
let student2 = "hyder";
let student3 = "Ali";
let students = ["hunain", "hyder", "Ismat", "Ali", "Furqan", "Ali"];
//console.log(students)
//console.log(students[0])
// problems
// 1.finding a name in array //bracket ko bracket notation aur . .notation kehty hain. . lagany k bad jo list ati h wo methods kehlaty hain array ke.
// solution
console.log(students.indexOf("Ali"));
console.log(students.indexOf("Ali", 2));
let numbers = [1, 2, 3, 4, 5, 10];
//console.log(numbers.indexof(10)) // puchna hai.
// 2.finding total elements in list
//slution
console.log(students.length);
console.log(students.slice(2, 4)); //slice concept // index number ko include krega aur index 4 ko nh krega.
students.splice(3, 4); //ye puchna b hai aaj. // original array mein se index number 2 se 5 tk cut krdiya baki print hoga console krny py.
console.log(students);
students.push("Zia"); // push concept // agar akhir mn ad krna h to push aur start m add krna h unshift
console.log(students);
// 3. deleting items
// REST PARAMETER CONCEPTS
function addition(numb1, numb2) {
    return numb1 + numb2;
}
//console.log(addition (8,9));
// ye nichy wala part puchna h sir hunain se aj hi.
function xyz() {
    let b = 4;
    console.log(b);
    return b;
}
let b = xyz;
//console.log(b)
students.shift(); // ye element delete krega array se lekin hmesha sb se pehle wala hi. agar hum khd se dengy to error ayga
students.unshift("Azhar"); // ye sb se pehly element mein "Azhar" add krega.
students.pop(); // ye sb se last waly ko delete krega
console.log(students);
console.log(students.length);
// homework (hum ny nine methods prhy hain) koi b 6 methods hum khud prhengy ye humara homework hai
//  includes(ts config es 2017 krna prega)   concat join map sort (forEach find join filter)(iski practice krni h)
// mutable or immutable kya hota h?
