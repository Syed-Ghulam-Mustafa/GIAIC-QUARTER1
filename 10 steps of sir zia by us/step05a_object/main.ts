let teacher = {
    name: "Hina",
    experience: "10"
}

console.log(teacher.name);
console.log(teacher["experience"])

// Type Declaration

let student : {
    name : string,
    age : number,
}

student = {
    name : "Hina",
    age : 30
}


// Examples from readme.md (in ko print kese krna h???)


function greet(person,{name:string, age:number}) {
    return "Hello" + person.name;
}
 // greet({name: "Hina", age: 30}); //error

 //using interface
interface Person {
    name: string;
    age: number;
}

// what is interface concept?? 

function greet2(person: Person) {
    return "Hello" + person.name;

}


// using type alliases

type Person2 = {
    name: string;
    age: number;
}

function greet3(person: Person2) {
    return "Hello" + person.name;

}