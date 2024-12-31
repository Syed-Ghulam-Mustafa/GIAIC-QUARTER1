"use strict";
let obj = {
    fName: "hina", //key : value
    // key humesha string hoti h 
    age: 24
};
// 2 ways of access objects keys 
console.log(obj.age); //.notation 
console.log(obj["fName"]);
let obj2 = {
    fName: "Ayesha",
    age: 24
};
// nested objects.
let person = {
    name: "ayesha",
    age: 24,
    isStudent: true,
    greet: function () {
        console.log("Hello, my name is " + this.name); //this.name new cheez h, this mtlb current object.
        // yahan agr hum person.name se kr skty thy wo b thik hai print b sahi ayga.
        // this esi hi sitution mn chlega jese yahan objct k andar function h esi condition mein,
        // agar simple object hoga to phr this nh chlega balke object ka name likh k hi . laga k access kengy.
        // this arrow function m n work nh krega balke named function mn hi work krega sirf.
    }
};
person.greet(); // object ka naam tha person is liey pehly prson call kiya,
// us k andar greet function tha is liye person.greet() is tarah call krengy,
// aur call hmesha global scope mn hi krty hain yahn b wohi kiya.
// NOTE
// exam ki tayyari sir zia ki panaverse ki repo se krni h 10 steps se.
// exam boht tough ayga exam ki tight tayyari krni hai.
