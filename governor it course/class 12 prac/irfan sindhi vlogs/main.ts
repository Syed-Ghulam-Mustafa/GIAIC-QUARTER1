

// function ka structure primitive h jo hum krty hain wo non primitive h.
// objects non primitive
// array b non primitive????
// syntax har cheez ka yad rkhna h
// puri typescript yani har cheez parhni h dobara
// two ways to print object propeties. no.1. . notation yani console mein object k age . likh k uski property name is tarah console.log(student.name)
// bracket method yani console.log(student2["age"]) is tarah.


let a = 3
// a = "Azhar" // varible ki value reassign ho skti h but same type ki.

let myArray = ["Azhar",true,11] // array mein har type a skti h koi restriction nh h.
myArray = [12112233434556566,false] //koi b type ki value reassign kr skty hain

// let array: string | number [] = ["Azhar","uzair",6,5]

 let tupple : [string,number,boolean] = ["Azhar" ,4 ,true] // jis tarah array likhty hain same wese left side py : k bad [] ke types define krengy.


type MyType = string | number
type MyType2 = boolean
type MyType3 = MyType | MyType2 // ye mn ny MyType3 ek new type bna li aur pipe lga k MyType aur MyType2 dediya.

let myTuple : [MyType,MyType2] = ["Azhar",true]

let family : MyType , MyType2 ,[] = ["Azhar",2,true,"yyy",false]
let numbers : number[] = [2,6]

let numbers2 : Array<string> = ["a","b","c"] // ye b 1 tarika h array likhny ka
                                             // <> in k andar single jee abi likhi h string ese b likh skty haim
                                             // aur pipe lga k yani anonymous ya type union b aur type allias custom type bhi likh skty hain.


let numbers3 : Array <string | number> = [1,5,"Abc","def"] // tadad,index,length etc kisi cheez ka farq nh prta bss 
                                                        // data type wohi hon jo pehly define hui hn.

let numbers4 : Array <MyType | MyType2> = [false,true,"Akber",33,6,"uzair",true] 

let myNumbers : MyType[] = [7,4,"4","me"] //syntax dekho
let myNumbers2 : MyType[] | string[] = ["6","home",6,7] // syntax dekho


// tupples

let myTuple2 : [string,number,boolean,number,number,boolean,string] = ["Azhar",2,true,9,77,true,"Azhar"]
// objects
// object value store krta h key value pair ki shakl mein
// type inference
let student = {
    name : "Azhar",
    age : 20,
    
}

// console.log(student);

// console.log(student.age);

// console.log(student["name"]);


// type declaration

type Student = {
    name : string,
    age : number
}

let student2 : Student = {
    name : "Azhar",
    age : 20
}

// console.log(student2.name);
// console.log(student2["age"]);
// console.log(student2);

//Anonymous by type
// syntax dekho
let car: {color:string , model:number} = {
color:"white",
model:2024
}

console.log(car.color);
console.log(car["model"]);

// type allias type

type Student2 ={
    class: string,
    rollNo: number
}
// object ko msla nh h tarteeb etc se type declaration mn 
let student3 : Student2 = {
    rollNo: 55,
    class: "4th"
}

// Nested Objects
// nested meaning ghosla. yani cheez k andar cheez. like nested object means object k andar object. nested function mtlb function k andar function

type Student3 = {
    name : string,
    age : number,
    address : {
        city : string,
        state : string
    }
}

let StudentData : Student3 = {
    name : "Azhar",
    age : 20,
    address : {
        city : "Karachi",
        state : "Sindh"
    }
}

type Book = {
    name: string,
    author: Author
}
type Name = {
    fName:string,
    mName:string,
    lName: string,
}
type Author = {
    fName: string,
    lName: string,
    mName: string,
    isWrote: boolean,
    age: number,
}


let myBook: Book = {
    name: "Kahani",
    author: {
        fName: "Azhar",
        mName: "Ali",
        lName: "Shah",  //hum jitny chahe utny obects b bna skty hain aur values b de skty hain aur 
                      //order object k liye itna important nh h. jese yahan hum ny middle name bad mn diya lastname k.
                      isWrote: true,
                     
        age: 22
}
}

// possible ways to print nested objects ki properties print kerny ki.
// console.log(myBook.name);
// console.log(myBook["author"]["age"]);
// console.log(myBook["author"].fName);
// console.log(myBook.author["lName"]);

type Model = {
    year?:number, //agr humko kisi value ko optional rkhna hai to ye ho skta h bss is point py us key ko opional bna do ? lga k.
    manufacturer: string, // sirf optional hi ho skta h rest/default etc nh.
}
type Example1 = {
    name: string,
    details: Model,
    average: string,
}

let meriCar = {
    name: "BMW",
    details: {
        year: 2024,
        manufacturer: "BMW",
        average: "good",
    }
}

console.log(meriCar.name,meriCar["details"]["manufacturer"]);


let meriCar2 = {
    name: "", // agr humein value khali chorni h to jo main object ho data wala wahan py expty string de skty hain.jese yhan.
    details: {
        manufacturer: "Toyota",
        average: "good",

    }
}

console.log(meriCar2);
console.log(meriCar2.name,meriCar2.details.average);


// interface aur type similar hain major difference ye h (abitk jo btaya h) k k type extendable nh h aur interface expandable h

interface studentData {
    StudentID: number,
    StudentName: string,
    StudentAge: number
}

interface teacherData {
    TeacherID: number,
    TeacherName: string,
    TeacherAge: number
}

type intersected = studentData & teacherData
// yahan py type intersected set kri h means intersection means & operator.
// pichy type union ka concept tha us mein | (pipe) lgta tha yani left side ya right side mein e koi 1 b milta tha to kher thi.
// abi type intrsection ka topic h mtlb donu sides studentData & teacherData donu ki values etc jama hngi lazmi.


let obj1 : intersected = {
    StudentID: 1055,
    StudentName: "Ajmal",
    StudentAge: 28,
    TeacherID: 87,
    TeacherName: "Bilal",
    TeacherAge: 40
}




// irfan sindhi vlogs 12th class part2 tk prha h mn ny yani azhar ny. 6 jan 2024 time 2.12 am

