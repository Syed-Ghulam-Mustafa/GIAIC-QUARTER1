
function greet(userName:string){
 return   `asalam o alaikum ${userName}
`}
greet("ali")

//console.log(greet("ali"))



function salam(userName:string){
    let a=5
    a*2
    return a

    return   `asalam o alaikum ${userName}
   `}
   //greet("waseem")
   
   //console.log(greet("waseem"))
  // a+4 //uper ham ne a ko return kya h to yaan pr error Q arha h
   //console.log(a)
   //a k nam se vribe bnaya h use ander mn use krsta hun kahin pr b lakin bzhir us krne k lye return zaruri h

   function salam1(num:number) {
    let a=9*num
//console.log(a)
    return a
   }
   //salam1(5) 
   let a =9

   function greetings(num:number) {
    if (true) {
        let a=9*num
       // console.log(a)}
       // console.log(a)
        return a
        
   }}
    
   let b = 7
   function greet2 (num:number) {
//let b = 5;
if (true) {
    //let b = 9*num
   // console.log(b);
    
}
  // console.log(b);
   }

  // greet2(4)
// upar wali funtion ki example mein lexical scope chl rha hai means pehly wo apny scope mein variable ko search krega
// us k bad phr upar waky scope mein dekhega phr global scope mein yani function waly scope se bahr search krega
// aur agr sab jaga se variables ko comment krdengy to phr error ajayngy.

//let student1 = "Akber";
//let student2 = "Ghulam Mustafa";
//let student3 = "Usman";
// upar main ne 3 students k name k liye alag alag variables bnaye hain jo sahi to h lekin readability functionality etc kam h iski.
// qk ye similar data h 3no students k hi name hein to mn in ko 1 list/array bna ke us mein store krskta hun wo behtar hoga.
// jese k let students = ["Akber","Ghulam Mustafa","Usman"];

// length(real address)       1         2                 3
// index                      0        1                 2
let students =            ["Akber","Ghulam Mustafa","Usman","Hyder","Hunain","Ali","Akber","Affan","Akber"];
let numbers = [1,2,3,4,5,10]
//console.log(students[2]) // students k bad jo square brackets lagaye hian in brackets ko bracket notation kehty hain 

// problem 1 finding a name in array 
// solution
//console.log(students.indexOf("Ghulam Mustafa"));
//console.log(students.indexOf("Usman"));
//console.log(students.indexOf("Akber"));
//console.log(students.indexOf("Murtaza"))
//console.log(students.lastIndexOf("Akber"))
//console.log(students.indexOf("Akber",7));

//console.log(numbers.indexOf(10))
//console.log(numbers.lastIndexOf(10))
// upar wali examples mein jo students k bad yani array k nam k bad jo . lg raha hai is ko dot notation kehty hain.
// aur .(dot) k bad jo list open hoti hai jin mein se indexof aur lastindexof b aye hain unko methods bolty hain.
// indexof aur lastindexof methods hain.

// problem 2 finding total names in array
// solution
//console.log(students.length)
//console.log(numbers.length)

// problem 3 Deleting names.
// solution
let names = ["Iqra","Ali","Muneer","Asim","Ismail"]
//console.log(names.slice(2)) // slice original array ki pehly copy bnata h phr us copy ko cut yani slice krta hai.
                            // slice ke age index number b dena prta hai aur jo index number hum dengy usko include 
                            // kr k agle elments tk slice krega.
//console.log(names.slice(1,4)) // slice jahan se slicing shuru krni hoti hai us index number ke element ko include
                              // krta hai jab ke end waly element ko include nhi krta hai.
//console.log(names); // yahan hum ne original array ko print krwaya hai aur original array names ka jo 5 lines upar
                    // main ne bnaya hai "Iqra" se "ISmail" tk same wohi print hua qk slice original array ko cut nh krta


// Adding names in array

//names.push("Zia");
//console.log(names);
//names.unshift("Muhammad","Bakhtawar");
//console.log(names);

//console.log(names.slice(1,4))

//console.log(names);
// console.log(names.splice(1,3)); // splice original array ko cut krega.
                                // ye kbi last waly element ko include kr rha hai aur kbi nh ye confusion h.

 
// 9 methods 1.indexof 2.lastindexof 3.slice 4.splice 5.length 6.push 7.unshift 8.shift 9.pop miss ne ye methods
//  class mein prhaye thy wo parh liye.

//                      HOMEWORK       

// map, foreach, filter, join, find, includes
// baki 6 methods kam se kam b hum ny khud parh k jany hain ghar se.
// wo 6 methods ye hain, 1 .foreach 2 .concat 3 .filter 4 .findindex 5 .join 6 .map 

// .includes jb use krengy to ts config ki file mein es2017 krna prega qk ye method bss usi mein chlta h.
// .sort ka method bss sahi hai.

// .join ka method array ko string k andar join krta h.
// .map function k andar use hota h.
// .foreach arrays k andar jo b elements hoty hain un sb ko one by one print krta h.


// methods parhny k liye websites hain w3schools.com aur mdn webdocs.

// mutable aur immutable methods
// mutable methods wo hoty hain jo original array ko change krdety hain.
// immutable methods wo hoty hain jo original array ko change nhn krty hain. jese k slice immutable h aur splice mutable h.




               // DOING HOMEWORK
               //.forEach()

// names.forEach(function (name,index,array){ // ye wala tarika samjh aya hai.
//    console.log(name)
// });

// function onebyone (name:string){
//     console.log(name)
// };
// names.forEach(onebyone)
// console.log(names);

// ye donu methods .foreach ke main ny Glowvia Tech yt channel ki video se seedkhe hain.
// ye immutable method hai yani originl list unchanged rehti hai.

// Description (W3Schools website)

// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.


// .filter()

// const agesFilter = [32, 33, 16, 40];  //(W3Schools website)

// function CheckAdultFilter(age:number) {
//   return age >= 18;
// }
// const resultFilter = agesFilter.filter(checkAdult);

// console.log(resultFilter)

// Description (W3Schools website)
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.


// .filter ki upar wali ye puri example W#Schools website se copy paste kri hai.
// YahooBaba yt channel bhi isi example se sikha rha tha.
// .filter() immutable method hai yani original array unchanged rahega.
// .filter() humesha condition wise chlta h yani jb iski condition true hogi to ye chlega jese upar wali example mein.


// .concat()

let friends = ["Amir","Irfan","Arfa","Fawwad"];
let moreFriends = ["Nimra","Ibrahim"];
let closeFriends = ["Asad","Ali"];
let goodFriends = ["Muhammad","Haider"];
let allFriends = friends.concat(moreFriends,closeFriends,goodFriends);
//let allFriends = friends.concat("Imran","Asghar")
//let allFriends = friends.concat(moreFriends);
// console.log(allFriends);

// .concat method yahoobaba yt channel ki video se sikha hai.
// ye immutable method hai yani original array unchanged rahega.

// Description (W3Schools)
// The concat() method joins two or more strings.

// The concat() method does not change the existing strings.

// The concat() method returns a new string.

// Syntax(W3chools)
// string.concat(string1, string2, ..., stringX)



// .join()

let teachers = ["Muhammad","Ishaq"]
let teacher = teachers.join(" - ") // jahan main ne space aur - diya hai yahan pr kuch b dal skty hain jo b dalyngy,
                                   //  wo strings k beech mein add ho jayga.
console.log(teacher);

// .join() method yahoobaba yt channel ki video se sikha hai.
// ye method b immutable hai yani original array unchanged rahega.


// Description (W3Schools website)

// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

// Syntax (W3Schools website)

// array.join(separator)


// .find()

// const agesFind = [14, 33, 54, 4];  //(W3Schools website)

// function CheckAdultFind(age:number) {
//   return age >= 18;
// }
// const resultFind = agesFind.find(checkAdult);

// console.log(resultFind)

// .find() method yahoobaba yt channel ki video se sikha h.
// ye method b immutable hai.


// Description (W3Schools ebsite)
// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array.


// .map()

//ye samjh nh aya.


// .includes()

let AAA = ["azhar","azeem","a.baseet","fizza"]
//let BBB = AAA.includes("azeem")
//let BBB = AAA.includes("Hunain")
let BBB = AAA.includes("azeem",2) // is line ki waja se console.log(BBB) mein false ayga qk main ne
                                  // usko string yani "azeem" ke sath index number yani 2 b diya hai
                                  // is ka mtlb hai "azeem" search ko lekin index 2 se,
                                  // aur qk "azeem" index 1 py h aur 2 k baadnh h to is liye false ayega nichy console mein.

console.log(BBB)
console.log(AAA);

// .includes() method yahoobaba yt channel ki video se sikha hai.
// ye method b immutable hai.


// Description (W3Schools website)

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

// Syntax (W3Schools website)

// array.includes(element, start)