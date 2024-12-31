// Types of Functions

// Expect Number

// function add  (a: number, b:number) :number {
//     return a+b 
// }
 
// Expect String

// function greet (name: string) :string {
//     return `Hello ${name}`
// }   

// function powerOutage (light: boolean) {
//     if (light) {
//         console.log("There is light")
//     }

//     else {
//         console.log("Power Outage. No electricity in my area. in ke doing most.." )
//     }
// }

// Expect Array

// function customFind (arr: string[], element: string ) {
//    for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return true
//         }
//     }
// }

// Expect Object

// function logPersonName (person : TPerson) : void {
//     console.log(person.name);
    
// }

// type TPerson = {
//     name: string;
//     age: number;
// }

// const person : TPerson = {
//     name: "John Doe",
//     age: 30
// }

// call back function

//callback 

//callback function ki attribute/properties/  ya pehchan
//jab kisi function ke round bracket k andar argument mein 1 aur function dala jaye
// to jo function dala jaye argument ki jaga usko bolty hyn callback function.
// 2nd attribute ye h k jis mein mere pas control nh hoga balky parent function k pas hoga us ny hi
// khud child fuction k console wali value ko apny pas invoke kiya.


// function parentFunction (func: () => void) {  
//     console.log("I m the parent function");  
//     func();
// }

// parentFunction(function() {
//     console.log("I m the callback function");
    
// });

// function childFunction () {
//     console.log("I m the child function");
// }

 //ya is tarah b krskty hyn childFunction ki tarah. ye easy tarika h. childFunction parentFunction k liye hi bnaya h.

// parentFunction(childFunction) 

// Nested function aur call back function mein ye farq hai k callback function mein hum function 
// ke paranthesis yani parameter mein 1 aur function lgaty hyn.
// aur Nested Function mein function ki body mein yani function ke curly brackets k andar
// hum 1 aur function lgaty hain.

// callback function examples from slide.

// function processUserInput (callback: any) {
//     let name = "Sir Ameen Alam"
//     callback(name)
// }

// processUserInput(function(name: string) {
//     console.log(`Hello, ${name}!`)
// })



// SYNC.

// console.log("Start");

// let username = 'Sir Mubashir Ali'
// console.log(username);

// let age = 18

// if (age < 18){
//     console.log('you are not an adult');
// }
// else {
//     console.log('you are an adult');
// }

// const best_friends : string[] = ["Hamza","Ali",'Raza',"Junaid"]
// for (let akber = 0; akber < best_friends.length; akber++) {
//     console.log(`${best_friends[akber]} is my best friend`)
// }

// type TCar = {
//     model : string,
//     year : number,
//     isUsed: boolean,
//     brand: string
// }

// const myCar : TCar = {  //const myCar waly pury part mein main ny
//     brand : "Toyota",   //khud se editing kri h even is ka 
//     model: 'Corolla',   //nam myCar b mn ny rkha h khud se
//     year : 2018,
//     isUsed: true
// }

// console.log(myCar['brand']);
// console.log(myCar.model);


// console.log('The End');



// CONCURRENCY

//definition
// It is a advance concept but not dificult concept. Concurrency ke andar
// hum parhty hain kuch options asynchronous javascript ke. 
// concurrency is liye zruri h hum is liye parhty hain qk is se humari performance
// enhance ho jati h because concurreny humary processors ko speedup krdeti hai.
// "We use concurrency to enhance the speed on a application because concurrency"
// speed up the processors"

// Concurrency ka Maqsad kya hai?
// Ans. concurrency ka ek hi maqsad h multitasking behavior achieve krna.

//setTimeOut

// e.g scheduling tasks like set a timer for baking.

console.log("one")

//Example of setTimeOut from Slides.

setTimeout (() => {
    console.log("Cake is ready!");
},2000)

// sir mubashir example

setTimeout (function() {    //ye tarika sahi hai setTimeOut ka 
    console.log("Hello, World!");
},5000)

function greet () {
    console.log("Hello everyone");
}

setTimeout(greet,10000) // ye tarika bhi sahi hai.
console.log("two");

function washing (callback: any) { //zbardasti any krwaya h sir ny sirf callback likha tha.
    console.log("washing started...");
    setTimeout(() => {
        console.log("washing done");
        callback(); 
    }, 5000)
}

function soaking (callback:any) {
    console.log("soaking started");
    setTimeout (() => {
        console.log("soaking done");
        callback(); 
    },3000)
}

function drying (callback:any) {
    console.log("drying started...");
    setTimeout(() => {
        console.log("drying done");
        callback()
    }, 2000)
}



// jahan se concurrency aur asynchronous aur callback ko theorotically samjha
// rha hota h wahan se dobara dekhni h video aur wo jo theory concept tha
// wo likhna h yahan lazmi InshaALLAH.


//  1:42 tk dekhi h. sir mubashir ki video. panaverse Dao py h.
