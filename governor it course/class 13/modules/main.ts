// modules
// ye 1 boht imp feuture h. code ko organize,reuse aur maintain krta h. ye is k main kaam hain. ya purpose hain.
// modules in typescript
// itni sari files(components) ek meinn ja k ek connect ho rhi hoti h. jis tarH diferent countries mn import export krte hain. isi tarah web ya software etc jo b ho us mein b cheezen import export hoti hain eg header isko bar bar import krty hain. to ye har page py show hota h.
// typescript mein ye data consume kr skti h modules ka. functions,classes,variables.

import {add} from './mymodule.js'
import {subtract} from "./mymodule.js" //agar hum kisi function ko export default krengy to yahan error ayga phir isko import krny mein.
                                     
// import a from "./mymodule" // yahan error arha h.
import {a} from "./mymodule.js"
import {b} from './mymodule.js'


console.log(a + " "+ b);

let result1 = add(5 , 1)
let result2 = subtract (10,result1)
console.log(subtract(10,result1))

console.log("addition:", result1);
console.log("subtraction:" + result2);


let input:any = "25";
let age: number = (input as number)

console.log(age);

//as string

// import aur export krny k tariky puchny hain miss ayesha se.