//step 09c
// default parameters...!

// default parameter in named funcion.


function func1 (firstName: string, lastName = "Shah"): string {
    return `Hi everyone, this is ${firstName} ${lastName}...!!`
}

console.log(func1("Syed Akber","Bukhari"));
console.log(func1("Syed Ghulam Mustafa"));


// default param in anonymous function...

let func2 = function (a: string, b= "Shah") : string {
    return "Hello World!, " + " I am " + a +  b
}

console.log(func2("Syed Akber"));
console.log(func2("Uzair","Bro"));

// default param in anonymous function with type explicit.
let func3 : (a: string, b: string) => string = function(city: string, province = "Sindh") : string {
    return `I live in ${city}, ${province}.`
}

let result = func3("karachi","sindh")
console.log(result);
// let result2 = func3("Karachi")




