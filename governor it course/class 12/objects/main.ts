

let student = {
    name: "hina",
    age: 24
}

console.log(student.name);
console.log(student["age"]);

let teacher = {
    name: "Ayesha",
    age: 24
}

console.log(teacher.age);
console.log(teacher["name"]); 

// anonymous
let car: {color: string, model: number} = {
    color: "white",
    model: 2024
}

console.log(car.color);
console.log(car["model"]);

// type allias
type Student = {
    fName: string,
    lName: string
    
}

let student1: Student = {
    fName: "Hina",
    lName: "Naseer"
}

console.log(student1.lName);



// Nested Objects

type Name = {
    firstName : string 
        middleName: string
        lastName: string
}
type PersonType = {
    name: {
        firstName : string 
        middleName: string
        lastName: string

    }, 
    age: number;
    isProgrammer: boolean;
};

let person: PersonType = {
    name: {
        firstName: "Ahmed",
        lastName: "Shaikh",
        middleName: "Raza"
    }, 
    age: 22,
    isProgrammer: true
} 

console.log(person);
console.log(person.isProgrammer);


let test = {
    name: "Akber",
    age: 23
}

function greet (a: string, b: string) {
    return a + b
}

console.log(greet("hello","world"));

console.log (greet(test.name,"Shah"))

//type allias

type Person = {
    name: string,
    age: number
}

let person1: Person = {
    name: "Hina",
    age: 24
}

enum colors {
    orange,
    blue
}

