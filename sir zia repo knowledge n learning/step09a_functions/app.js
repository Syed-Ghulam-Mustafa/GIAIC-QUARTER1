"use strict";
// Step 09a 
// Functions
//bar bar repitition se bachny k liye hum function ka use krty hain. function
// ki khasiyat ye h k 1 chiz jo bzr bar repeat ho rhi hoti h code mein us se 
// bachny k liye yani code ko boht summarize krny k liye aur boht khubsurat krny
// ke liye function ka use krty hain.
// All Parameters are required
// Named Function
function add(x, y) {
    return x + y;
}
add(2, 8);
// Named function ke 4 rules hain.
// 1st. function k keyword se start krengy.
// 2nd. function ka koi bhi naam rakhengy.
// 3rd. paranthesis hoga.
// 4th. curly bracket k andar apni condition dengy.
//       Anonymous Function 
// (use for func mein func)
// Anonymous ko as a argument use kr skty hain func mein
let MyAdd1 = function (x, y) {
    return x + y;
};
// Rules...
// Anonymous Function ko let ya const mein store krty hain.
// Variable mein store krny k function ka keyword likhty hain but naam nh likhty.
// Anonymous Function with Explicit Type
let MyAdd2 = function (x, y) {
    return x + y;
};
console.log(MyAdd2(5, 4));
// By default har func value ki jo value hoti h wo void hoti hai
// ye samjhaya nh is ne sirf pura function read kr k nikl gya agly function py.
// ye samjh nh aya hai, samjhna hai ye lazmi InshaALLAH.
// types name dont matter
let MyAdd3 = function (x, y) {
    return x + y;
};
console.log(MyAdd3(5, 8));
// is mein ye btaya hai k function ke paranthesis ke andar jo hum
// type define krty hain like number etc uska jo nam hota hai wo
// hum kuch b rakh skty hain koi farq nhi parta like (Azhar: number,home:boolean)
// aur ye bhi zruri nh h k arrow se phly waly parameter names aur arrow k bad waly same hon.
// Different ho skty hain error nh ayga.
// Lambda Function
// single line mein return
let MyAdd4 = (a, b) => a + b;
MyAdd4(7, 8); // 
console.log(MyAdd4(6, 5)); //(first example)
// samjhany ke liye
let MyAdd41 = (a, b) => (a + b); // for single statment use () round bracket. 
let MyAdd42 = (a, b) => { a + b; }; // for multiple statment use {} curly braces.
function Greeter(fn) {
    fn('Hello'); // ye khud se likha hai intelligence ki help se.
    // video mein curly bracket empty tha
}
function argumentFunction(a) {
    return "Hello World!";
}
console.log(Greeter(argumentFunction));
// 7:30 tk dekhi h video knowledge and learning ki.
