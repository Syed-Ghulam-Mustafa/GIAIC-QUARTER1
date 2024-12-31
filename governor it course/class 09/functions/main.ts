console.log("Hello World")
function greet  () {  // () is ke agy hum : laga k void likh skty hain qk yahn py return ka keyword nhn h to return nh ayga is liye.
    console.log("Hello World!")
    console.log("How are you")
    console.log("which class r u in!")
    console.log("which is ur school")
}

greet()
greet()
greet()
greet() // agar () hata dengy to hello world nh ayga qk wo isko variable smjhega

function add(num1:number, num2:number) {
    const sum = num1 + num2;
    console.log("Sum: ",sum);
}
// functiom ko call krte waqt arguments provide krna 
add(5,3) // yhan 5 aur 3 argumwnts hain.


// class assignment by miss hina.
function subtraction (numberA : number, numberB : number){
console.log(`subtraction is ${numberA - numberB} `)
}
subtraction(9,4)

function greet2 (name:string = "bhai") { // yhan py= k baad jo striing mein bhai likha hai ye default parameter hai. ye by default vlue hai yani agr ap koi argument nh dengy call krty waqt to phr default wali value ajaygi.
    console.log("Assalam o Alaikum hunain")
    console.log("Assalam o Alaikum " + name);
    return name
}
let UserName = greet2("Ali")
greet2("Syed Ghulam Mustafa");
greet2();

console.log(UserName + "is my best friend")
console.log(UserName + "what do you eat?")
greet2();

            // HOMEWORK //
// Next class mein function parh k aney hain, basic function, arrow function,rest parameters,spread operators,
// default parameter, return,callback functions,movenload functions,assitorious function, sitorious function,
// assync await.
