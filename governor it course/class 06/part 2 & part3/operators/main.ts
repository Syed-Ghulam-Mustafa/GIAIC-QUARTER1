//operators
//addition

let num1: number = 10;
let num2: number = 12;
//console.log(num1 + num2)
// nichy waly answer mein concatenate ho rha hai.

let numa: any = "6"
let sum = numa + num2
//console.log(sum)


//console.log(numa + num1 + num2)
//console.log(num1 + num2 + numa)

//console.log(num1 + numa + num2)

//subtraction

let subtraction = num1 - num2
//console.log(subtraction)


//console.log(numa + num2 - num1) // "6" + 12 - 10  // iska answer 602 kyun arha hai?
//console.log(num2 + numa - num1) // 12 + "6" - 10  // iska answer 116 kyun arha hai?
//console.log(num1 - num2 + numa) // 10 - 12 + "6"  // iska answer -26 kyun arha hai?


//multiplication
//console.log(num2 * num1)
//console.log(num2 * numa) // iska answer 72 kyun arha hai?


//console.log(numa + num1 * num2)
//console.log(num1 * num1 + numa)
//console.log(num1 + numa * num2) // iska answer 82 kyun arha hai?
// 10 + "6" = 106 
//console.log(numa * 3) // "6" 3 se multiply ho jayga?

//division
//console.log(num2 / num1)


//console.log(num1/num2 + numa)
//console.log(numa + num2/num1)

//exponentiation
//console.log(2 ** num1)


//console.log(numa + 2 ** 3)
//console.log(2 ** 3 + numa)
//console.log(2 ** 3 + numa + 2**2)

//modulus
//console.log(num2 % num2)
//console.log(num2 % num1)


//console.log(num2 % num1 + numa)
//console.log(numa + num2 % num1)
//console.log(num1 % num2)
//console.log(numa + num1 % num2)


// unary operators...

// unary operators k kafi zyada concepts hain jin mein se major 2 concepts hain.
// 1. "++ incriment" 2. "-- decriment"

--num1                // decriment
// console.log(num1)       //9

--num2                // decriment
// console.log(num2)     //11

num1++                // incriment
// console.log(num1)     //9

--num1                // decriment
// console.log(num1)     //9

++num2                // incriment
// console.log(num2)     //12

num2--                // decriment
// console.log(num2)     //11


// class 6 part 3
num1++ //9
num1++ //10 
++num1 //12
num1-- //11
--num1 //10
// console.log(num1); //10
// console.log(num1++) //10
// console.log(num1); //11   // post increment ++ usi time implement nh krta balky agli line mein 
                          //implement krta hai is ki misaal ye wala yani 3sra console.log hai.
                          //post decriment usi time apply ho jata h.

let num_b = 2
// console.log(num_b); //2  // simple num_b ko console krwa diya to jo uski value thi means wo print hogyi.

++num_b 
// console.log(num_b); //3  // num_b py pre increment lga diya h to 2 + 1 ho k 3 print hua hai.

num_b--; 
// console.log(num_b); //2    // is console.log mein num_b py post decrement lga diya hai is waja se 2 print hua qk upar wali line mein iski 3 aur abi post decrement lga diya aur console hum humesha agli line mein krty hain is liye phly post decrement apply hua phir console hua to answer 2 agya.

// console.log(num_b++); //2  // is line mein hum ny console k andar post increment lgaya hai is waja se post inrement ko apply hony time nh mila aur answer 2 hi agya. next step mn agar hum console krengy to us mein ye wala post increment apply hoga.

// console.log(++num_b); //4  // qk is line mein pre increment lgaya hai to phly increment apply hua hai phr console hua hai. upar wali lne wala post increment k baad value 3 ho gyi thi aur abi wala pre increment b lga hai to 4 answer aya hai.

// increment ++ aur decrement -- donu ka concept aur implement hony ka tarika same hi bs ek + h aur ek - hai.

let numabc = 3;
let numdef = 6;
let numxyz = ++numabc + numabc++ + --numdef + numdef-- + numabc + numdef++ + 
                 //4       4           5          4         5         4   =26 (correct 27)

numdef;  // ans=32
             //4       //4        //5         //5        //5      //4          //5

// console.log(numxyz)
 


























