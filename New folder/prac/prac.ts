const arrey = [1,2,3,4,5,6,7,8,9]
const result = arrey.slice(2,7)
console.log(result);


const arr=[1,2,3,4,5,6,7]
const result1 =arr.reduce((acc,current)=>acc +  current ,0)
console.log(result1);


const arre =[1,2,3,4,5,6,7,]
const result2 = arre.filter(num =>num %3===0)
console.log(result2);

const arrey1 = [1,2,3,4,5]
const result3 = arrey1.filter(num=>num %2===0).map(NUM=>NUM*2).reduce((acc , current)=>acc + current)
console.log(result3);


const arrey2 = [1,2,3,4,5]
const result4 = arrey2.map(num=>num*3)
 console.log(result4);


 let arrey3 = [1,2,3,4,5,6]
 let result5 = arrey3.push(0,-10)
 arrey3.pop()
 console.log(result5);
 
const arrey4 = [1,2]
const arrey5 = [9,10]
const result6 = arrey4.concat(arrey5)
 console.log(result6);

 const arrey6 = [1,2]
 const arrey7 = [3,4]
 const result7 =arrey6.concat(arrey7).join("-")
 console.log(result7);

 const names:string[] = ["a","b","c","e","f"]
 const name1:boolean =names.includes("c",9)
 const name2:boolean =names.includes("e",4)
 console.log(name1);
 console.log(name2);

 let arrey8  = [1,2,3,4,5,]
 arrey8.push(6,7)
 arrey8.shift()
 console.log(arrey8);

 let arrey9 = [1,2,3,4,5]
arrey9.fill(0,1,3)  
 console.log(arrey9);

 let arrey10 = [1,2,3,4,5]
 arrey10.includes(3)
 console.log(arrey10)


 
let ar = [1, 2, 3, 4, 5];
ar.push(6, 7);
ar.shift();
ar.splice(2, 1);
console.log(ar);