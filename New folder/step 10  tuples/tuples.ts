//tules ka syntex
let tuples: [string,number,string] = ["osama",123,"yaqub"]

const fn= ( ):[string,number]=>{return["azhar" , 3]}
let [string,number]=fn()
console.log(number);
console.log(string);

const fn2 =():{name:string} =>{return{
    name:"ali",
}}
console.log(fn2);
