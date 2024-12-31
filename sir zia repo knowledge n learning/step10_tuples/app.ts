// tuples
//why we use
// humary pass 1 function mein multiple valu ko return krne ka method nh tha javascript mein
// humy 1 class bnani parti thi aur phir class ko object kar ke return karna parta tha.


// tuple types have the advantage that you can accurately describe the type of an array of mixed types.

var tuple: [number, string] = [1, "Akber"];
var secondElement = tuple[1]; // secondElement now has type 'string'
console.log(secondElement);
// secondElement has now type 'string'       

// excess through index number.

// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.

// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.

const fn = (): [number, string] => {
    return [2, "Asad"]
}

//example destructure 

const [num, str] = fn()
console.log(num);
console.log(str);


//example 2 destructure object

const fn2 = (): {name: string} => {
    return {
        name: "Syed Akber Shah"
    }
}
fn2()
//const {name} = fn2()
// console.log(name); // Syed Akber Shah
console.log(fn2()); //by me (AZhar)



/* use of tupples (1 function mein multiple values return karne k liye)
tupple order ko maintain krta hai agr 1st string likhi h to uski value b string honi chahye.
typically an array contains zero to many objects of a single type. Typescript has special analysis around
arrays which contain multiple types, and where the order in which they are indexed is important.*/


/* tupples mein jab hum kuch push karengy to conpile time error nh ayga runtime error ayga is se bachny k liye 
hum tuple ko readonly bna lety hain
   in short tupple means fix type and fix length */

   let tuple3 :  [number,string] = [2, "Mustafa"]
 tuple3.push("Akber",23)
console.log(tuple3);

// yahan bina readonly ke values push b hogyin aur error b nh aya pta nh q?????

let tuple2 :  readonly [number,string,number] = [5,"elder bro", 11]
 tuple2.push(true,false) 
console.log(tuple2);

// bina readonly ke b error arha tha aur readonly k bad b






// knowledge and learning video step 10 tupples sir zia repo


let myTupple : [string,number] = ["Azh",0,] //tplz

