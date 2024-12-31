//union literals 
//union literals ka hum tab use kr rhy hoty hyn jb humary pass boht sari types di hui hoti hain
//yani several types mojud h us mn se hum koi c b ek ya ek se zyada type ko use kr rhy hain
//to esi sitiuation k liye union literals use  hoty hain.

let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

let myAge: string | number;

myAge = 16;//narrowing
console.log(myAge);

//console.log(myAge.toLowerCase());//Error

myAge = "Dont Know";//narrowing
console.log(myAge);

console.log(myAge.toString()); // common to both types
//can be called even without narrowing

console.log(myAge.toLowerCase());//Can be called on string
//because of narrowing


let newAge = Math.random() > 0.6 ? "Khan": 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
// Type of newAge: string
newAge.toUpperCase(); // Can be called
}

if(typeof newAge === "string"){
// Type of newAge: string
newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number

let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
//age = "living";//Error


let zia: "zia";

zia = "zia";
//zia = "khan";//Error


let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;

if (yourName) {
yourName.toUpperCase(); // Ok: string
}

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.

yourName?.toUpperCase();//OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;
