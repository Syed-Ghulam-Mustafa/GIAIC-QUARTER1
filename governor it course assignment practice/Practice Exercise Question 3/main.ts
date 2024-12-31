let MyName: string = "Syed Ghulam Mustafa";

// printing UPPERCASE
// console.log ke andar variable yani MyName. likh k without space to likhengy, to likhny k bad kafi options khulengy un mn se UpperCase likh k bracket open aur close kr k bara bracket close krna hai.



console.log("UpperCase", MyName.toUpperCase())
console.log(MyName.toUpperCase())

console.log(MyName.toUpperCase)
console.log(MyName.toUpperCase())
console.log(MyName.toLocaleUpperCase())

//printing lowercase
// console.log ke andar variable yani MyName. likh k without space to likhengy, to likhny k bad kafi options khulengy un mn se LowerCase likh k bracket open aur close kr k bara bracket close krna hai.

console.log("lowercase:", MyName.toLowerCase())
console.log(MyName.toLowerCase())
console.log("lowercase:", MyName.toLocaleLowerCase());
console.log(MyName.toLowerCase())


//printing TitleCase
//console.log ke andar variable yani MyName. likh k without space replace likhengy aur without space bracket open kr k ye code likhegy /\bw/g,c.toUpperCase())). then print krengy to titlecase mein print ho jayga variable MyName.


console.log(MyName.replace(/\bw/g,c => c.toUpperCase()));
console.log("TitleCase", MyName.replace(/\bw/g,c => c.toUpperCase()));
console.log("TitleCase:", MyName.replace(/\bw/g,c => c.toLocaleUpperCase() ))
console.log(MyName.replace(/\bw/g,c => c.toUpperCase()));
// nichy wala code wese hi check krne k liye likha hai
console.log(MyName.replace(/\bw/g,c => c.toLowerCase()));













