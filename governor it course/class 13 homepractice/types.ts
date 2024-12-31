

let x: string = "Azhar"
let y = "Uzair"
// y = 44 // variable mein data type ki sakhti h primitive aur inference both mein.

console.log(x.toUpperCase()); //ye method run hua qk sring ka tha.

// console.log(x.Math.sqrt()); // yahan error aya h qk ye method number k related h

let z : any = "Shah"
console.log(z.Math.sqrt()); //yahan b error ayga qk number to abi b nh h aur method number ka h.

let w: unknown = true
w= 44
// console.log(w.Math.sqrt()) //error qk type unknown h number nh
w= "Abcd"
// console.log(w.toUpperCase) //error qk type unknown h string nh


                 //       Difference b/w unknown and any

// any 1 unsafa data type h ye khud se infer krny ki try nh krti k type kon c h aur na hi error deti h.
// unknown any ka safe alternative h ye type infer b krta h aur error b dega agar ap string py number ya boolean ka method lgaogy to.

if (typeof w == "string"){
    console.log(w.toLowerCase());
    
} else if (typeof w == "number"){
console.log(Math.sqrt(w));
}

// ye unknown ki esi situation chlany ka trika hai. if else lga k.




