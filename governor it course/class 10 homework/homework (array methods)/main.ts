
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