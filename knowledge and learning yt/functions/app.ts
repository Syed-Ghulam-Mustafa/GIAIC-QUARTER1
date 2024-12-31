// FUNCTIONS.
// VOID
// RETURN
// Parameter

// example 1.
function student() {
    console.log("Hello Akber")
}

student();

// example 2. (parameter)
function calculate(a:number, b:number) {
    console.log(a + b)
}

calculate(5,10);

// example 3. 

function calculateName(a: number, b:number, c:number):number {
    let total: number = a + b + c;
    return total
}

let result: number = calculateName(3,5,9);
console.log(result);

// void use krny ki koshish kri hai lekin errors aye hain.
/* function calculateName2(name,f.name):void {
    let total = name + f.name
    return total
}

let result2 = calculateName2("Akber","Saleem");
console.log(result); */
