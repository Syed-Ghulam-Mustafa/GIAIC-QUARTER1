//arrey
let arrey :number []=[12,22,32.122,]
console.log(arrey[2]);


//eempty arrey
let arrey1 : string []= []



//alternative correct arrey
let arrey2 =[1,2,3]
console.log(arrey2);


//arrey error 
let arrey3 :string []




//arrey dinemacally adding 

let arrey4 :string []= []
arrey4.push("syed ghulam mustafa","syed akber shah" );
console.log(arrey4);



//name function 
function add(a:number , b: number): number  {
    return  b + a
} 
console.log(6+9);


//anonimas function 
let myname = function(a:number ,z:number):number {
    return z*a
} 
console.log(7*8 );

//anoymous function with explict type

let myname1 : (a:number , z:number) => number = function(a:number , z:number):number {
    return z*a
} 
console.log(9*10 );
//lambda func

let azhar = (a:number,b:number)=>a*b
console.log(12*15);

let uzair (a:number,b:number)=>a*b




















//arrey
let fff []=["aaa",111]

//arrey empty
let meau []=[]


//lambda fun
let cat : (a:number,b:number) => number = function (abc: number, def: number) : number {
    return abc*def
} 


//anoymous function
  let add2 =function() {
   return (1+2)
}

//name function
function add4 (){
    return 1+2
}

//object
let abc = {
    name : "syed",
    age : 20,
    city : "karachi"
}



















//tuples 
let tuple :[string,number]=["aaa",111]
//arrey empy
let arrey5: []=[]

//arrey
let arrey6 : string []=["aaa","bbb"] //array ghlt bnaya tha uzair ny. tupple bna diya tha.

//arrey dinemacally 
let arrey7:string[]=[] // is mein b error tha uzair ny primitive data type (string) nh di thi is waja se.
arrey7.push("aaaa")


//func
function abcd(a:number,b:number){
    return a*b
}

//anoymous func
let save =function(a:number,b:number){
    return a*b
}

// anonymous function with type explicit

let cat2 :(a:number,b:number)=>number=function(aa:number,bb:number) : number {
    return aa*bb
}

// lambda func

// single line return
let hope = (a:string, b:string)=>a+b


let Hope = (a: string, b: string) : string => {   // double line return example 
    return a + b
}

