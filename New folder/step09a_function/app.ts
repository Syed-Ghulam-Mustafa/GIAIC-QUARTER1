//step09a_Functions
// my practice (azhar for uzair exam)


//named functions

function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

greet("Uzair");



function numbers(a: number, z:number) : number {
    return a+z
}

console.log(numbers(7,4));


//anonymous functions
// anonymous function ko as a argument use kr skty hain.

let myAnonymous = function (a: string, b:number) : string {
return `This men is ${a + b} months old.`
}

console.log(myAnonymous("20 years", 6));

//lambda function
// type names doesnt matter

let spl_function : (a: number, b: number) => number = function (a: number, b : number) : number {
    return a*b;
}

console.log(spl_function(3, 5));

let lambFunction : (a:string, b:string) => string = function (y:string, z:string) : string {
    return y + z;
}

console.log(lambFunction("azhar","uzair"));

