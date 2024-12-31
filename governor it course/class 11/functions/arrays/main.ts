
type MyType = number | string // type alliases // non primitive data type.
                              // type ka keyword likh k hum khud type pehly se de skty hain aur phir jo hum ny bnaya h,
                              // usko use krengy na ke hum bar bar manually type likhen.

type MyType2 = boolean
let numbers2 :number [] = [1,2,3]

let numbers3: Array<string> = ["a","b","c"] 

let example: MyType | MyType2 = 12345;
example = true
example = "Akber"

let numbers4 : [string,string,string,number] = ["A","B","C",1] // tupples concept // is mein jo types aur jo length 
                                                 // define kari h wohi accept krega sirf aur nh krega error de dega.
                                                 // length zyada hogi yani agr zyada elements hongy tb b error dega
                                                 // aur jo tarteeb btyi h wo nh hogi tb b error dega
                                                 // aur jo data types upar define kri hyn un k ilawa koi,
                                                 // dusri data type dalengy tb b error dega ye boht zyada strict hota h.

 let myNumbers: string[] = ["Hunain","Hyder","Ali"]

console.log(myNumbers.map(myNumber => {
    if (myNumber == "Ali") {
        myNumber = "Abdullah"  //agar value change wala print chahye return krwana must hai.
    }
    return myNumber
 })  //map b loop ki tarah kaam krta h.
)
 console.log(myNumbers);
 
 // 0 Hunain if myNumber == Ali myNumber == Abdullah  myN umber iterator object h.
 // 1 Haider if mNumber == Ali myNumber == Abdullah
 // 2 Ali    if myNumber == Ali myNumber == Abdullah

 let ourNumbers = [1,2,3,4,5]
 let squareNumbers = ourNumbers.map(num => num **2) // yahan pr return is liye nh krwaya qk yahan curly bracket nh lagaye hain.

 console.log(ourNumbers) 
 console.log(squareNumbers);
 
 




