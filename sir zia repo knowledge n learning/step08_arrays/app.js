"use strict";
/// step08_arrays
// let array1 : number[] = [5, 6, 7];//correct syntax
// console.log(array1[1]);//correct syntax
// console.log(array1); //my practice correct syntax.
// let arrayA:number[]=[1,3,5] //my practice
// console.log(arrayA);
// console.log(arrayA[0]);
// let array2:Array<number> = [1, 2, 3];//alternative correct syntax //Array pe 
// // error arha tha wo argument mang rha tha Array ke agy <number> main ne likha
// // hai number iska argument hai.
// console.log(array2[2]);
// console.log(array2);
// let array3 : number[] = [];//correct syntax to define an empty array
// console.log(array3);
// let array4: number[] = new number[2];//error
let array5 = [];
array5.push(1234); //dynamically adding
console.log(array5); //my practice 
console.log(array5[1]);
array5.unshift(5, 6, 7);
console.log(array5);
console.log(array5[2]);
array5.push(8, 9, 10);
console.log(array5);
