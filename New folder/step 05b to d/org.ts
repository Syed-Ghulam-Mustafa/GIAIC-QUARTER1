let teacher :{name : string , grade : number, age : number} = {
    name : "miss hina" ,
    grade : 17 ,
    age : 34
}
console.log(teacher);

//aliased type
type student = {name : string , age : number }
let studdent1 : student = {
    name : "syed uzair" ,
    age : 25
}
console.log(studdent1.age);
console.log(studdent1["name"]);


//interface

interface manager {
    name : string ,
}
let storemanager : manager ={
    name :"syed Uzair"}

    //structral
  interface Ball {
    diameter : number
  }  
  interface Sphere {
    diameter : number 
  }
 let ball : Ball = {
    diameter : 10
 }
 let sphere : Sphere = {
    diameter : 25
 }
 ball=sphere
 sphere=ball

 interface Tube {
   diameter : number
    length : number
 }
 let tube :Tube ={
    diameter : 25,
    length : 3
 }
 sphere=tube
 ball=tube 

 //nested object

type auther = {
    fname : string ,
    lname : string ,
    
}
type book ={
    auther: auther ,
    name :string
}


const mybook :book ={
    auther:{
        fname: "ghulam",
        lname: "mustafa",
    },
    name : "way sunnah"}
    console.log(mybook);

//interseted type
interface student2 {
    sname : "uzair" ,
    sid  :112
}
    
interface teacher {
    tname : "hina" ,
    tid  :1111  
}

type intercetd_type =teacher & student2
let obj1: intercetd_type ={
    sname : "uzair" ,
    sid  :112,
    tname : "hina" ,
    tid  :1111
}
console.log();












