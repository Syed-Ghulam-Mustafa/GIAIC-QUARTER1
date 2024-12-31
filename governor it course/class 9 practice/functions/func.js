"use strict";
//console.log("Hello World");
// simple 1 page py ya 1 time print krwana ho to upar wala method.
// function greet () {
//     console.log("Hello World");
// }
// greet();
// greet();
// greet();
// upar wala method jab best hoga jab hum ek se zyada dafa print krwa hongy hello world ko ya boht sary pages py print krwa rhy hongy.
//console.log(greet())
// example given in next line.
// function greet2 () {
//     console.log("Assalam o Alaikum World");
//     console.log("Assalam o Alaikum World");
//     console.log("Assalam o Alaikum World");
//     console.log("Assalam o Alaikum World");
// }
// greet2();
// function add (num1: number, num2: number){
// const sum = num1 + num2
//     console.log("Sum: ",sum);
// }
// add(8,4);
// function generateTable() {
//     let num = 2
//     console.log(num +" x 1 =", num*1);
//     console.log(num +" x 2 =", num*2);
//     console.log(num +" x 3 =", num*3);
//     console.log(num +" x 4 =", num*4);
//     console.log(num +" x 5 =", num*5);
// }
// generateTable();
function generateTable2(num = 4) {
    console.log(num + " x 1 =", num * 1);
    console.log(num + " x 2 =", num * 2);
    console.log(num + " x 3 =", num * 3);
    console.log(num + " x 4 =", num * 4);
    console.log(num + " x 5 =", num * 5);
}
generateTable2(67);
// function intro (Name: string,Name2?: string) { // yahn py name 2 optional parameter h is ki argument add krengy call mn to print ho jaygi.
//                                                // name2 ka argument nh dengy to required parameter wala output ajayga aur koi error b nh ayga aur ye main ne khud dala h class mn ye nh dalwaya tha sir hunain ny.
//     console.log("Assalam o Alaikum Haider")
//     console.log("Assalam o Alaikum", Name);
// }
//  intro("asim");
function intro2(Name = "bhai") {
    //argument nh milega to wo error nh dega balky "bhai" print krdega,
    //jese if else mein else kam krta hai usi ki tarah ki misal h iski b.
    console.log("Assalam o Alaikum " + Name);
    return Name;
}
intro2("asim"); //intro2 function ko call krwaya aur argument diya "asim"
let userName = intro2("hania"); //is line mein hum ne 1 variable bnaya userName aur uski value assign krdi,
//intro2("argument") ke equal. is line mein hum argument change b kr skty hain,
//aur jo b nam rkhengy "" is mein usi ka nichy wali lines mein answer ayga.
console.log(userName); //upar wali line mein argment mein jo b naam diya hoga wo print ho k ajayga,
// for example yahan py "hania" likha hua to is wali line ka answer "hania" hai aur nichy wali line ka "shafeeq" hoga answer.
userName = "shafeeq"; // is line mein hum ne userName variable ki value ko reassign ya edit kiya hai,
// aur "shafeeq" rkha hai yahan hum kuch b naam b rakh skty hain aur jitni bar chahen, 
// value reassign  b kr skty hain chahen upar jahan function call ho rha hai wahan ja ke,
// argument change krlen ya variable userName ko edit krty rhen lekin zyada acha ye h k variable ki value ko bar bar ressagin kren.
console.log(userName);
console.log(userName + " how are you?"); //upar wali line mein userName mein "shafeeq" diya hai to is sentence mein wohi ayga.
console.log(userName + " What are you doing?"); //same as above.
// HOMEWORK //
// Next class mein function parh k aney hain, basic function, arrow function,rest parameters,spread operators,
// default parameter, return,callback functions,movenload functions,assitorious function, sitorious function,
// assync await
