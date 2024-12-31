// part1

let a = 123;
a= 878
// a="Akber" yahan error h qk upar a ki value number thi aur yahan string

let myFamily = ["Me","My Bro","Mummy","Pappa",true,2]; // array mein esi koi sakhti nh h us k liye type union ya type allias use krengy.

// Type Allias/ Type Union

let b : number | string | boolean =  124
b = "abc";
b= false

// right ways for array
let ourFamily : Array<string | number> = ["Azhar","Uzair", 1,2]

type myType = string | number
let family: Array<myType> = ["Uzair", 1 ,23]
let family2: myType[] = ["Uzair", 1 ,23]
 
// error way for array
//let family: string | number | number[] = ["Uzair", 1 ,23]

type myType2 = myType | boolean
let c : myType = "Akber"
c = 0
//c= true // yahan error h qk c ki type myType rkhi h agar myType2 rkhengy to error nh ayga. 

// tupples

let myTuple : [string, number, boolean] = ["Akber", 123, true]
myTuple[0] = "Azhar"
myTuple[1] = 1234
myTuple[2] = false
//myTuple[3] = "Azhar" // error h qk myTuple mein 3 index nh h.

// let myTuple2 : [string, number, boolean] = ["Akber", 123, true,"Mustafa"]
// upar wali line mein error arha h qk tupples mein jo hum define krty hain aur jo hum data input krty hain donu sahi hony chAHye.
// tupples mein sequence, data type har cheez sahi honi chhahye.