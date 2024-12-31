//methods of array class 10 mein hai.

//Syntaxes in Typescricpt

// variable

let abc = "uzair" //type inference (string)
const numZzz : number = 12345 
var xyz = true


// array

//index number          //0        //1    //2    //3
let myArr : string [] = ["Azhar","Uzair","etc","etc"]

let myArr2 : Array <number | string> = [23,"Shahjee",25] //ye b array ki type define
                                                         //krny ka trika h.

console.log(myArr);
console.log(myArr[1]);


// yahan main ny pehly se type define krdi hai (string) is wja se wo sirf sring hi accept krega.
// otherwise agar hum strong typing yani pehly se type nh btayn to array mein
// esi koi restriction nh hoti.
//array ki type mein pipe (|) lga kr aur Type Allias de kr donu tarah se multiple
// types de skty hain.


//tuples

let myTupple : [string,number,string,string] = ["Azhar",11,"Uzair","Shah Family"]


// if else


//if aur else if mein if aur else ke keyword k baad round bracket () mein condition
// lgti h phir curly bracket mein console ya return krty hain.
// jabke else mein direct curly bracket lgta hai.

if (abc) {
    console.log(`My name is ${abc}`);
    
} else if (xyz){
    console.log("if else syntax");
    
} else {
    console.log("bugs in code!!!!!!");
}

let temperature = 40
//switch statement

switch (temperature) {
    case 40:
        console.log("It is too hot here!");
        break;

        case 30:
            console.log("normal weather");
            break;
            
    default:
        console.log("Winter Started ;)");
        break;
}

// type allias

type MyType = string | number | boolean | null

// union literal

let myDetails : string | number = "Ghulam Mustafa"
myDetails = 25
//myDetails = true //error qk union literal mn sirf string aur number define kri hyn.

// object

let myObj = {
    name: "Akber Shah",
    age: 23,
    height: 6,
}

//2 ways of accessing object property

console.log(myObj.name);
console.log(myObj["age"]); //2 ways...
console.log(myObj);


// type allias

type Person = {
    name: string,
    age: number
}


// type alliased object

let personDet : Person = {
name: "Syed Ghulam Mustafa",
age: 25,
}


// anonymous object 

let car : {brand: string, model: string, make: number} = {
    make :  2024,
    brand : "Toyota",
    model:  "Revo"
}

// nested object

type personName = {
    name: {
        firstName: string,
        middleName: string,
        lastName: string
    }
    age: number,
    height: number,
    isProgrammer: boolean
}

let myPerson : personName = {
    name: {
        firstName: "Syed",
        middleName: "Ghulam Mustafa",
        lastName: "Shah",
    },
    age: 25,
    height: 5.10,
    isProgrammer: true
}

let myCar = {
    carDetails : {
company: "BMW",
model: "BMW Cheetah",
make: "iron",
year: 2023,
    },
    mileage: 25/1,
    tyres: "tubeless",
}

// enum (simple form)

enum Colors {  //starts with 0
    orange,
    blue,
    yellow
}

console.log(Colors.orange);
console.log(Colors["blue"]);
console.log(Colors[2]);

enum Colors2 {red=1,green=5,black=7}
console.log(Colors2[7+]);

enum Role {
    student_id = 33,
    TeacherId= 76,
    superAdminRole = 455
}

const enum fruitsInfo {
    mango = "yellow",
    guava = "green",
    sugar_cane = "green"
}


// functions

// named function

function myName (First_Name: string, Last_Name:string) : string {
return "my name is " + First_Name + " " + Last_Name + "."
}

console.log(myName("Ghulam Mustafa","Shah"))

//       Anonymous Function 

// (use for func mein func)
// Anonymous ko as a argument use kr skty hain func mein


let MyAdd1 = function (x: number, y:number) {
    return x + y;
}

// Anonymous Function with Explicit Type

let MyAdd2: (x: number, y: number) => number = function (x: number, y: number) {
    return x + y;
}

console.log(MyAdd2(5,4));

// Lambda Function

// single line mein return

let MyAdd4 = (a: number, b: number) => a+b;
MyAdd4(7,8) // 
console.log(MyAdd4(6,5));  //(first example)

// samjhany ke liye
let MyAdd41 = (a: number, b: number) => (a + b)  // for single statment use () round bracket. 

let MyAdd42 = (a: number, b: number) => {a + b}  // for multiple statment use {} curly braces.


//Lambda func (2nd example)
const add2 = (a: number, b: number) :number => {
    console.log("kardo bhai ab to subscribe");
    return a + b;
}

function argumentFunction (a: string) :string {
    return "Hello World!"
}



 


        